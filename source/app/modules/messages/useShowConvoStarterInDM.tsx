// app/modules/messages/useShowConvoStarterInDM.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var7 = var4.RelationshipTypes;
    var _closure1_slot6 = var7;
    var4 = var4.UserFlags;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/useShowConvoStarterInDM.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 25;
    var3['MAX_MESSAGES_ALLOWED_FOR_GREETING'] = var4;
    var2 = function useShowConvoStarterInDM(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var2 = var7.isDM;
            var8 = var2.bind(var7)();
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var7.isSystemDM;
            var2 = var2.bind(var7)();
            var8 = !var2;
case 2:
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var7.rawRecipients;
            var3 = var4.some;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.bot;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var8 = !var2;
case 4:
            var _closure2_slot1 = var8;
            var6 = null;
            if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var7.getRecipientId;
            var6 = var2.bind(var7)();
case 6:
            var _closure2_slot2 = var6;
            var5 = _closure1_slot0;
            var10 = _closure1_slot1;
            var3 = 5;
            var3 = var10[var3];
            var4 = undefined;
            var11 = var5.bind(var4)(var3);
            var9 = var11.useStrangerDangerWarning;
            var3 = var7.id;
            var9 = var9.bind(var11)(var3);
            var _closure2_slot3 = var9;
            var3 = 6;
            var3 = var10[var3];
            var5 = var5.bind(var4)(var3);
            var4 = var5.useStateFromStores;
            var10 = _closure1_slot3;
            var3 = new Array(4);
            var3[0] = var10;
            var10 = _closure1_slot2;
            var3[1] = var10;
            var10 = _closure1_slot4;
            var3[2] = var10;
            var2 = _closure1_slot5;
            var3[3] = var2;
            var2 = new Array(4);
            var2[0] = var9;
            var2[1] = var8;
            var7 = var7.id;
            var2[2] = var7;
            var2[3] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure2_slot1;
                    if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = false;
                    return var3;
case 10:
                    var6 = _closure1_slot2;
                    var5 = var6.isMessageRequest;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var4 = var5.bind(var6)(var4);
                    if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = _closure2_slot2;
                    if(!(var1 != var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var6 = _closure1_slot4;
                    var5 = var6.getRelationshipType;
                    var4 = _closure2_slot2;
                    var5 = var5.bind(var6)(var4);
                    var4 = _closure1_slot6;
                    var4 = var4.BLOCKED;
                    if(!(var5 !== var4)) { _fun0002_ip = 16; continue _fun0002 }
case 14:
                    var4 = _closure2_slot2;
                    if(!(var1 != var4)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var6 = _closure1_slot5;
                    var5 = var6.getUser;
                    var4 = _closure2_slot2;
                    var5 = var5.bind(var6)(var4);
                    if(!(var1 != var5)) { _fun0002_ip = 17; continue _fun0002 }
case 19:
                    var4 = var5.hasFlag;
                    var1 = _closure1_slot7;
                    var1 = var1.PROVISIONAL_ACCOUNT;
                    var1 = var4.bind(var5)(var1);
                    if(var1) { _fun0002_ip = 20; continue _fun0002 }
case 17:
                    var5 = _closure1_slot3;
                    var4 = var5.getMessages;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var4 = var4.bind(var5)(var1);
                    var1 = var4.ready;
                    if(!var1) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var5 = var4.hasMoreBefore;
                    var1 = !var5;
case 21:
                    if(!var1) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var5 = var4.hasMoreAfter;
                    var1 = !var5;
case 23:
                    if(!var1) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var5 = var4.length;
                    var4 = 25;
                    var1 = var5 < var4;
case 25:
                    if(!var1) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var4 = _closure1_slot3;
                    var3 = var4.hasCurrentUserSentMessage;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
case 27:
                    return var1;
case 20:
                    var1 = false;
                    return var1;
case 16:
                    var1 = false;
                    return var1;
case 12:
                    var1 = false;
                    return var1;
case 8:
                    var1 = false;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        }
    };
    var3['useShowConvoStarterInDM'] = var2;
    return var1;
})();
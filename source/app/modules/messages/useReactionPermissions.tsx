// app/modules/messages/useReactionPermissions.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot8 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/useReactionPermissions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useReactionPermissions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var12 = arg1;
            var _closure2_slot0 = var12;
            var1 = null;
            var2 = var1 == var12;
            var6 = undefined;
            var14 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var14 = var12.guild_id;
case 2:
            var _closure2_slot1 = var14;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 6;
            var3 = var13[var7];
            var11 = var8.bind(var6)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var3;
            var4 = new Array(1);
            var4[0] = var14;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot6;
                    var3 = var4.canChatInGuild;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var11 = var10.bind(var11)(var9, var3, var4);
            var _closure2_slot2 = var11;
            var3 = var13[var7];
            var15 = var8.bind(var6)(var3);
            var10 = var15.useStateFromStores;
            var3 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var3;
            var4 = new Array(1);
            var4[0] = var14;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var4 = _closure1_slot4;
                    var3 = var4.isLurking;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var4 = var10.bind(var15)(var9, var3, var4);
            var3 = var13[var7];
            var16 = var8.bind(var6)(var3);
            var15 = var16.useStateFromStores;
            var3 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var3;
            var9 = new Array(1);
            var9[0] = var14;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 4; continue _fun0004 }
case 5:
                    var4 = _closure1_slot5;
                    var3 = var4.isCurrentUserGuest;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var3 = var15.bind(var16)(var10, var3, var9);
            var7 = var13[var7];
            var15 = var8.bind(var6)(var7);
            var10 = var15.useStateFromStores;
            var7 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var12;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0005_ip = 6; continue _fun0005 }
case 7:
                    var5 = _closure1_slot7;
                    var4 = var5.can;
                    var3 = _closure1_slot8;
                    var3 = var3.ADD_REACTIONS;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 6:
                    return var1;
                }
            };
            var10 = var10.bind(var15)(var9, var5, var7);
            var5 = 7;
            var5 = var13[var5];
            var7 = var8.bind(var6)(var5);
            var5 = var7.useCurrentUserAutomodQuaratinedProfile;
            var7 = var5.bind(var7)(var14);
            var5 = 8;
            var5 = var13[var5];
            var9 = var8.bind(var6)(var5);
            var5 = var9.useCurrentUserCommunicationDisabled;
            var14 = var5.bind(var9)(var14);
            var9 = _closure1_slot3;
            var5 = 2;
            var9 = var9.bind(var6)(var14, var5);
            var5 = 1;
            var9 = var9[var5];
            var5 = 9;
            var5 = var13[var5];
            var8 = var8.bind(var6)(var5);
            var5 = var8.useIsActiveChannelOrUnarchivableThread;
            var8 = var5.bind(var8)(var12);
            if(!(var1 != var12)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = {};
            var5 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 10;
            var2 = var13[var2];
            var5 = var5.bind(var6)(var2);
            var2 = {};
            var2['channel'] = var12;
            var2['canChat'] = var11;
            var11 = true;
            var2['renderReactions'] = var11;
            var2['canAddNewReactions'] = var10;
            var2['isLurking'] = var4;
            var2['isGuest'] = var3;
            var2['communicationDisabled'] = var9;
            var2['isActiveChannelOrUnarchivableThread'] = var8;
            var2['isAutomodQuarantined'] = var7;
            var18 = var5.bind(var6)(var2);
            var19 = var1;
            var2 = copyDataProperties(var19, var18);
            var2 = 'isLurking';
            var1[var2] = var4;
            var2 = 'isGuest';
            var1[var2] = var3;
            var3 = false;
            var2 = 'isPendingMember';
            var1[var2] = var3;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var1 = {'disableReactionReads': true, 'disableReactionCreates': true, 'disableReactionUpdates': true, 'isLurking': false, 'isGuest': false, 'isPendingMember': false};
case 10:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
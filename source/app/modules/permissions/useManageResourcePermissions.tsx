// app/modules/permissions/useManageResourcePermissions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
    var _closure1_slot7 = var5;
    var5 = var4.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS;
    var _closure1_slot8 = var5;
    var4 = var4.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot10 = var4;
    var4 = {'canCreateExpressions': false, 'canCreateGuildEvent': false, 'canManageAllExpressions': false, 'canManageAllEvents': false};
    var5 = function canManageGuildExpression() {
        var1 = false;
        return var1;
    };
    var4['canManageGuildExpression'] = var5;
    var5 = function canManageGuildEvent() {
        var1 = false;
        return var1;
    };
    var4['canManageGuildEvent'] = var5;
    var _closure1_slot11 = var4;
    var4 = function canManageResource(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var4 = arg4;
            var7 = null;
            var1 = var7 != var6;
            if(!var1) { _fun0001_ip = 181; continue _fun0001 }
 21:
            var2 = arg3;
            var3 = !var2;
            var2 = !var3;
            if(!var3) { _fun0001_ip = 178; continue _fun0001 }
 36:
            var3 = 'creator_id';
            var3 = var3 in var6;
            if(var3) { _fun0001_ip = 147; continue _fun0001 }
 47:
            var3 = 'userId';
            var3 = var3 in var6;
            if(var3) { _fun0001_ip = 115; continue _fun0001 }
 58:
            var3 = 'user';
            var3 = var3 in var6;
            if(!var3) { _fun0001_ip = 113; continue _fun0001 }
 69:
            var8 = var4;
            if(!var4) { _fun0001_ip = 79; continue _fun0001 }
 75:
            var8 = var7 != var5;
 79:
            if(!var8) { _fun0001_ip = 110; continue _fun0001 }
 82:
            var9 = var6.user;
            var11 = var7 == var9;
            var10 = undefined;
            if(var11) { _fun0001_ip = 101; continue _fun0001 }
 96:
            var10 = var9.id;
 101:
            var9 = var5.id;
            var8 = var10 === var9;
 110:
            var3 = var8;
 113:
            _fun0001_ip = 145; continue _fun0001;
 115:
            var8 = var4;
            if(!var4) { _fun0001_ip = 125; continue _fun0001 }
 121:
            var8 = var7 != var5;
 125:
            if(!var8) { _fun0001_ip = 142; continue _fun0001 }
 128:
            var10 = var6.userId;
            var9 = var5.id;
            var8 = var10 === var9;
 142:
            var3 = var8;
 145:
            _fun0001_ip = 175; continue _fun0001;
 147:
            if(!var4) { _fun0001_ip = 154; continue _fun0001 }
 150:
            var4 = var7 != var5;
 154:
            if(!var4) { _fun0001_ip = 172; continue _fun0001 }
 157:
            var6 = var6.creator_id;
            var5 = var5.id;
            var4 = var6 === var5;
 172:
            var3 = var4;
 175:
            var2 = var3;
 178:
            var1 = var2;
 181:
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var4 = function attachChannelPermissions(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 140; continue _fun0002 }
 12:
            var5 = _closure1_slot7;
            var2 = var3.isGuildStageVoice;
            var2 = var2.bind(var3)();
            if(var2) { _fun0002_ip = 51; continue _fun0002 }
 32:
            var2 = var3.isGuildVoice;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0002_ip = 55; continue _fun0002 }
 45:
            var5 = _closure1_slot9;
            _fun0002_ip = 55; continue _fun0002;
 51:
            var5 = _closure1_slot8;
 55:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 6;
            var2 = var7[var3];
            var4 = undefined;
            var9 = var6.bind(var4)(var2);
            var8 = var9.combine;
            var2 = _closure1_slot10;
            var1 = var2.CREATE_EVENTS;
            var8 = var8.bind(var9)(var5, var1);
            var1 = new Array(2);
            var1[0] = var8;
            var3 = var7[var3];
            var4 = var6.bind(var4)(var3);
            var3 = var4.combine;
            var2 = var2.MANAGE_EVENTS;
            var2 = var3.bind(var4)(var5, var2);
            var1[1] = var2;
            return var1;
 140:
            var2 = _closure1_slot10;
            var3 = var2.CREATE_EVENTS;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.MANAGE_EVENTS;
            var1[1] = var2;
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/permissions/useManageResourcePermissions.tsx';
    var5 = var6.bind(var7)(var5);
    var3['attachChannelPermissions'] = var4;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var9 = arg1;
            var _closure2_slot0 = var9;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var10 = undefined;
            var4 = var4.bind(var10)(var3);
            var3 = var4.isGuildRecord;
            var3 = var3.bind(var4)(var9);
            if(var3) { _fun0003_ip = 59; continue _fun0003 }
 48:
            var3 = _closure1_slot13;
            var3 = var3.bind(var10)(var9);
            _fun0003_ip = 90; continue _fun0003;
 59:
            var5 = _closure1_slot10;
            var6 = var5.CREATE_EVENTS;
            var4 = new Array(2);
            var4[0] = var6;
            var5 = var5.MANAGE_EVENTS;
            var4[1] = var5;
            var3 = var4;
 90:
            var13 = _closure1_slot3;
            var5 = 2;
            var3 = var13.bind(var10)(var3, var5);
            var7 = 0;
            var4 = var3[var7];
            var _closure2_slot1 = var4;
            var6 = 1;
            var3 = var3[var6];
            var _closure2_slot2 = var3;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 8;
            var8 = var11[var3];
            var15 = var4.bind(var10)(var8);
            var14 = var15.useStateFromStoresArray;
            var8 = _closure1_slot5;
            var12 = new Array(1);
            var12[0] = var8;
            var8 = function() {
                var5 = _closure1_slot5;
                var6 = var5.can;
                var3 = _closure1_slot10;
                var1 = var3.CREATE_GUILD_EXPRESSIONS;
                var4 = _closure2_slot0;
                var6 = var6.bind(var5)(var1, var4);
                var1 = new Array(4);
                var1[0] = var6;
                var6 = var5.can;
                var3 = var3.MANAGE_GUILD_EXPRESSIONS;
                var3 = var6.bind(var5)(var3, var4);
                var1[1] = var3;
                var6 = var5.can;
                var3 = _closure2_slot1;
                var3 = var6.bind(var5)(var3, var4);
                var1[2] = var3;
                var3 = var5.can;
                var2 = _closure2_slot2;
                var2 = var3.bind(var5)(var2, var4);
                var1[3] = var2;
                return var1;
            };
            var12 = var14.bind(var15)(var12, var8);
            var8 = 4;
            var12 = var13.bind(var10)(var12, var8);
            var8 = var12[var7];
            var _closure2_slot3 = var8;
            var6 = var12[var6];
            var _closure2_slot4 = var6;
            var7 = var12[var5];
            var _closure2_slot5 = var7;
            var5 = 3;
            var5 = var12[var5];
            var _closure2_slot6 = var5;
            var3 = var11[var3];
            var11 = var4.bind(var10)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var10.bind(var11)(var4, var3);
            var _closure2_slot7 = var12;
            var11 = _closure1_slot4;
            var10 = var11.useCallback;
            var4 = new Array(3);
            var4[0] = var8;
            var4[1] = var6;
            var4[2] = var12;
            var3 = function(arg1) {
                var6 = _closure1_slot12;
                var9 = _closure2_slot7;
                var8 = _closure2_slot4;
                var7 = _closure2_slot3;
                var11 = undefined;
                var10 = arg1;
                var1 = var11[var6](var10, var9, var8, var7, var6);
                return var1;
            };
            var4 = var10.bind(var11)(var3, var4);
            var10 = var11.useCallback;
            var3 = new Array(3);
            var3[0] = var5;
            var3[1] = var7;
            var3[2] = var12;
            var1 = function(arg1) {
                var6 = _closure1_slot12;
                var9 = _closure2_slot7;
                var8 = _closure2_slot6;
                var7 = _closure2_slot5;
                var11 = undefined;
                var10 = arg1;
                var1 = var11[var6](var10, var9, var8, var7, var6);
                return var1;
            };
            var3 = var10.bind(var11)(var1, var3);
            var1 = null;
            if(!(var1 != var9)) { _fun0003_ip = 366; continue _fun0003 }
 332:
            var1 = {};
            var1['canCreateExpressions'] = var8;
            var1['canCreateGuildEvent'] = var7;
            var1['canManageAllExpressions'] = var6;
            var1['canManageAllEvents'] = var5;
            var1['canManageGuildExpression'] = var4;
            var1['canManageGuildEvent'] = var3;
            _fun0003_ip = 370; continue _fun0003;
 366:
            var1 = _closure1_slot11;
 370:
            return var1;
        }
    };
    var3['useManageResourcePermissions'] = var4;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var8 = arg1;
            var10 = arguments[1];
            var9 = arguments[2];
            var6 = undefined;
            if(!(var10 === var6)) { _fun0004_ip = 24; continue _fun0004 }
 17:
            var10 = _closure1_slot5;
 24:
            if(!(var9 === var6)) { _fun0004_ip = 35; continue _fun0004 }
 28:
            var9 = _closure1_slot6;
 35:
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.isGuildRecord;
            var1 = var1.bind(var4)(var8);
            if(var1) { _fun0004_ip = 103; continue _fun0004 }
 92:
            var1 = _closure1_slot13;
            var5 = var1.bind(var6)(var8);
            _fun0004_ip = 134; continue _fun0004;
 103:
            var4 = _closure1_slot10;
            var7 = var4.CREATE_EVENTS;
            var1 = new Array(2);
            var1[0] = var7;
            var4 = var4.MANAGE_EVENTS;
            var1[1] = var4;
            var5 = var1;
 134:
            var4 = _closure1_slot3;
            var1 = 2;
            var4 = var4.bind(var6)(var5, var1);
            var1 = 0;
            var6 = var4[var1];
            var1 = 1;
            var4 = var4[var1];
            var7 = var10.can;
            var1 = _closure1_slot10;
            var5 = var1.CREATE_GUILD_EXPRESSIONS;
            var7 = var7.bind(var10)(var5, var8);
            _closure2_slot0 = var7;
            var5 = var10.can;
            var1 = var1.MANAGE_GUILD_EXPRESSIONS;
            var5 = var5.bind(var10)(var1, var8);
            _closure2_slot1 = var5;
            var1 = var10.can;
            var6 = var1.bind(var10)(var6, var8);
            _closure2_slot2 = var6;
            var1 = var10.can;
            var4 = var1.bind(var10)(var4, var8);
            _closure2_slot3 = var4;
            var1 = var9.getCurrentUser;
            var1 = var1.bind(var9)();
            _closure2_slot4 = var1;
            var1 = null;
            if(!(var1 != var8)) { _fun0004_ip = 303; continue _fun0004 }
 259:
            var1 = {};
            var1['canCreateExpressions'] = var7;
            var1['canCreateGuildEvent'] = var6;
            var1['canManageAllExpressions'] = var5;
            var1['canManageAllEvents'] = var4;
            var4 = function canManageGuildExpression(arg1) {
                var6 = _closure1_slot12;
                var9 = _closure2_slot4;
                var8 = _closure2_slot1;
                var7 = _closure2_slot0;
                var11 = undefined;
                var10 = arg1;
                var1 = var11[var6](var10, var9, var8, var7, var6);
                return var1;
            };
            var1['canManageGuildExpression'] = var4;
            var3 = function canManageGuildEvent(arg1) {
                var6 = _closure1_slot12;
                var9 = _closure2_slot4;
                var8 = _closure2_slot3;
                var7 = _closure2_slot2;
                var11 = undefined;
                var10 = arg1;
                var1 = var11[var6](var10, var9, var8, var7, var6);
                return var1;
            };
            var1['canManageGuildEvent'] = var3;
            _fun0004_ip = 307; continue _fun0004;
 303:
            var1 = _closure1_slot11;
 307:
            return var1;
        }
    };
    var3['getManageResourcePermissions'] = var2;
    return var1;
})();
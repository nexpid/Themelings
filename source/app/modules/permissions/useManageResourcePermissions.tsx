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
case 0:
            var6 = arg1;
            var5 = arg2;
            var4 = arg4;
            var7 = null;
            var1 = var7 != var6;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = arg3;
            var3 = !var2;
            var2 = !var3;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = 'creator_id';
            var3 = var3 in var6;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = 'userId';
            var3 = var3 in var6;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = 'user';
            var3 = var3 in var6;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var4;
            if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var7 != var5;
case 12:
            if(!var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = var6.user;
            var11 = var7 == var9;
            var10 = undefined;
            if(var11) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var10 = var9.id;
case 16:
            var9 = var5.id;
            var8 = var10 === var9;
case 14:
            var3 = var8;
case 10:
            _fun0001_ip = 18; continue _fun0001;
case 8:
            var8 = var4;
            if(!var4) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var8 = var7 != var5;
case 19:
            if(!var8) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var10 = var6.userId;
            var9 = var5.id;
            var8 = var10 === var9;
case 21:
            var3 = var8;
case 18:
            _fun0001_ip = 23; continue _fun0001;
case 6:
            if(!var4) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var4 = var7 != var5;
case 24:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var6 = var6.creator_id;
            var5 = var5.id;
            var4 = var6 === var5;
case 26:
            var3 = var4;
case 23:
            var2 = var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var4 = function attachChannelPermissions(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var5 = _closure1_slot7;
            var2 = var3.isGuildStageVoice;
            var2 = var2.bind(var3)();
            if(var2) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var2 = var3.isGuildVoice;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var5 = _closure1_slot9;
            _fun0002_ip = 32; continue _fun0002;
case 30:
            var5 = _closure1_slot8;
case 32:
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
case 28:
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
case 0:
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
            if(var3) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var3 = _closure1_slot13;
            var3 = var3.bind(var10)(var9);
            _fun0003_ip = 36; continue _fun0003;
case 34:
            var5 = _closure1_slot10;
            var6 = var5.CREATE_EVENTS;
            var4 = new Array(2);
            var4[0] = var6;
            var5 = var5.MANAGE_EVENTS;
            var4[1] = var5;
            var3 = var4;
case 36:
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
            if(!(var1 != var9)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var1 = {};
            var1['canCreateExpressions'] = var8;
            var1['canCreateGuildEvent'] = var7;
            var1['canManageAllExpressions'] = var6;
            var1['canManageAllEvents'] = var5;
            var1['canManageGuildExpression'] = var4;
            var1['canManageGuildEvent'] = var3;
            _fun0003_ip = 39; continue _fun0003;
case 37:
            var1 = _closure1_slot11;
case 39:
            return var1;
        }
    };
    var3['useManageResourcePermissions'] = var4;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arg1;
            var10 = arguments[1];
            var9 = arguments[2];
            var6 = undefined;
            if(!(var10 === var6)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var10 = _closure1_slot5;
case 40:
            if(!(var9 === var6)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var9 = _closure1_slot6;
case 42:
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
            if(var1) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var1 = _closure1_slot13;
            var5 = var1.bind(var6)(var8);
            _fun0004_ip = 46; continue _fun0004;
case 44:
            var4 = _closure1_slot10;
            var7 = var4.CREATE_EVENTS;
            var1 = new Array(2);
            var1[0] = var7;
            var4 = var4.MANAGE_EVENTS;
            var1[1] = var4;
            var5 = var1;
case 46:
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
            if(!(var1 != var8)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
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
            _fun0004_ip = 49; continue _fun0004;
case 47:
            var1 = _closure1_slot11;
case 49:
            return var1;
        }
    };
    var3['getManageResourcePermissions'] = var2;
    return var1;
})();
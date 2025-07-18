// app/modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function canReportRaid(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var3 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 19; continue _fun0001 }
 12:
            var3 = _closure1_slot2;
 19:
            var4 = var3.can;
            var1 = _closure1_slot5;
            var1 = var1.BAN_MEMBERS;
            var1 = var4.bind(var3)(var1, var5);
            var4 = var3;
            if(var1) { _fun0001_ip = 72; continue _fun0001 }
 50:
            var6 = var4.can;
            var3 = _closure1_slot5;
            var3 = var3.KICK_MEMBERS;
            var1 = var6.bind(var4)(var3, var5);
 72:
            if(var1) { _fun0001_ip = 97; continue _fun0001 }
 75:
            var3 = var4.can;
            var2 = _closure1_slot5;
            var2 = var2.MANAGE_GUILD;
            var1 = var3.bind(var4)(var2, var5);
 97:
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function canEnableRaidAlerts(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arguments[1];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0002_ip = 16; continue _fun0002 }
 9:
            var4 = _closure1_slot2;
 16:
            var3 = var4.can;
            var1 = _closure1_slot5;
            var2 = var1.MANAGE_GUILD;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = var9;
    var6 = var6.Permissions;
    var _closure1_slot5 = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['canReportRaid'] = var5;
    var5 = function useCanReportRaid(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var9 = arg1;
            var _closure2_slot0 = var9;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 3;
            var2 = var7[var4];
            var6 = undefined;
            var12 = var5.bind(var6)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot2;
            var10 = new Array(1);
            var10[0] = var2;
            var8 = new Array(1);
            var8[0] = var9;
            var2 = function() {
                var4 = _closure1_slot6;
                var3 = _closure2_slot0;
                var2 = _closure1_slot2;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2 = var11.bind(var12)(var10, var2, var8);
            var4 = var7[var4];
            var8 = var5.bind(var6)(var4);
            var7 = var8.useStateFromStores;
            var4 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = new Array(1);
            var4[0] = var9;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0004_ip = 43; continue _fun0004 }
 16:
                    var4 = _closure1_slot3;
                    var3 = var4.getGuildIncident;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 43:
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var5, var1, var4);
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0003_ip = 161; continue _fun0003 }
 130:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 4;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.hasDetectedActivity;
            var1 = var3.bind(var4)(var5);
 161:
            var1 = !var1;
            if(!var1) { _fun0003_ip = 170; continue _fun0003 }
 167:
            var1 = var2;
 170:
            return var1;
        }
    };
    var3['useCanReportRaid'] = var5;
    var3['canEnableRaidAlerts'] = var4;
    var4 = function useCanEnableRaidAlerts(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var4 = _closure1_slot7;
            var3 = _closure2_slot0;
            var2 = _closure1_slot2;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useCanEnableRaidAlerts'] = var4;
    var2 = function useShowMentionRaidLimitUpsell(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 3;
            var4 = var6[var3];
            var3 = undefined;
            var10 = var5.bind(var3)(var4);
            var9 = var10.useStateFromStores;
            var4 = _closure1_slot2;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = new Array(1);
            var4[0] = var7;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot2;
                    var2 = undefined;
                    if(!(var3 === var2)) { _fun0006_ip = 24; continue _fun0006 }
 20:
                    var3 = _closure1_slot2;
 24:
                    var2 = var3.can;
                    var1 = _closure1_slot5;
                    var1 = var1.MANAGE_GUILD;
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var8, var2, var4);
            var4 = 5;
            var4 = var6[var4];
            var5 = var5.bind(var3)(var4);
            var4 = var5.useIsMentionRaidExperimentEnabled;
            var6 = null;
            var8 = var6 == var7;
            if(var8) { _fun0005_ip = 105; continue _fun0005 }
 100:
            var3 = var7.id;
 105:
            if(!(var6 == var3)) { _fun0005_ip = 113; continue _fun0005 }
 109:
            var3 = _closure1_slot4;
 113:
            var1 = false;
            var1 = var4.bind(var5)(var3, var1);
            if(!var1) { _fun0005_ip = 127; continue _fun0005 }
 124:
            var1 = var2;
 127:
            return var1;
        }
    };
    var3['useShowMentionRaidLimitUpsell'] = var2;
    return var1;
})();
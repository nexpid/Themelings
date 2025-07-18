// app/modules/guild_antiraid/GuildAntiRaidActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _setGuildRaidAlerts() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var4 = arg1;
                    var5 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 240; continue _fun0001 }
 16:
                    var2 = global;
                    var6 = var2.Set;
                    var11 = var4.features;
                    var3 = var6.prototype;
                    var3 = Object.create(var3, {constructor: {value: var6}});
                    var12 = var3;
                    var2 = new var12[var6](var11, var10);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var7 = var2.has;
                    var6 = _closure1_slot7;
                    var6 = var6.COMMUNITY;
                    var6 = var7.bind(var2)(var6);
                    if(var6) { _fun0001_ip = 123; continue _fun0001 }
 76:
                    if(var5) { _fun0001_ip = 101; continue _fun0001 }
 79:
                    var7 = var2.delete;
                    var6 = _closure1_slot7;
                    var6 = var6.NON_COMMUNITY_RAID_ALERTS;
                    var6 = var7.bind(var2)(var6);
                    _fun0001_ip = 168; continue _fun0001;
 101:
                    var7 = var2.add;
                    var6 = _closure1_slot7;
                    var6 = var6.NON_COMMUNITY_RAID_ALERTS;
                    var6 = var7.bind(var2)(var6);
                    _fun0001_ip = 168; continue _fun0001;
 123:
                    if(var5) { _fun0001_ip = 148; continue _fun0001 }
 126:
                    var6 = var2.add;
                    var5 = _closure1_slot7;
                    var5 = var5.RAID_ALERTS_DISABLED;
                    var5 = var6.bind(var2)(var5);
                    _fun0001_ip = 168; continue _fun0001;
 148:
                    var6 = var2.delete;
                    var5 = _closure1_slot7;
                    var5 = var5.RAID_ALERTS_DISABLED;
                    var5 = var6.bind(var2)(var5);
 168:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var5 = var5[var3];
                    var3 = undefined;
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.saveGuild;
                    var5 = var4.id;
                    var4 = {};
                    var4['features'] = var2;
                    var2 = {};
                    var8 = true;
                    var2['throwErr'] = var8;
                    var2 = var6.bind(var7)(var5, var4, var2);
                    SaveGenerator(address=228);
 226:
                    return var2;
 228:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 237; continue _fun0001 }
 234:
                    return var3;
 237:
                    return var2;
 240:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _setGuildIncidentActions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 187; continue _fun0002 }
 10:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var7 = var2.bind(var4)();
                    var5 = var7.add;
                    var3 = arg4;
                    var2 = 'hours';
                    var3 = var5.bind(var7)(var3, var2);
                    var2 = var3.toISOString;
                    var3 = var2.bind(var3)();
                    var5 = {};
                    var8 = arg2;
                    var7 = null;
                    if(!var8) { _fun0002_ip = 80; continue _fun0002 }
 77:
                    var7 = var3;
 80:
                    var5['invites_disabled_until'] = var7;
                    var7 = arg3;
                    var2 = null;
                    if(!var7) { _fun0002_ip = 96; continue _fun0002 }
 93:
                    var2 = var3;
 96:
                    var5['dms_disabled_until'] = var2;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 7;
                    var2 = var7[var2];
                    var2 = var3.bind(var4)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.put;
                    var2 = {};
                    var8 = _closure1_slot6;
                    var7 = var8.GUILD_INCIDENT_ACTIONS;
                    var6 = arg1;
                    var6 = var7.bind(var8)(var6);
                    var2['url'] = var6;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=175);
 173:
                    return var2;
 175:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 184; continue _fun0002 }
 181:
                    return var2;
 184:
                    return var2;
 187:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _handleResolveRaid() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 185; continue _fun0003 }
 13:
                    var3 = _closure1_slot4;
                    var2 = var3.getGuild;
                    var7 = var2.bind(var3)(var8);
                    var2 = null;
                    var4 = var2 != var7;
                    var3 = null;
                    if(!var4) { _fun0003_ip = 68; continue _fun0003 }
 41:
                    var9 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 8;
                    var4 = var5[var4];
                    var5 = undefined;
                    var4 = var9.bind(var5)(var4);
                    var3 = var4.bind(var5)(var7);
 68:
                    var3 = var2 == var3;
                    var2 = null;
                    if(var3) { _fun0003_ip = 182; continue _fun0003 }
 77:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {};
                    var7 = _closure1_slot6;
                    var6 = var7.GUILD_INCIDENT_REPORT_FALSE_ALARM;
                    var6 = var6.bind(var7)(var8);
                    var3['url'] = var6;
                    var6 = {};
                    var7 = arg2;
                    var6['alert_message_id'] = var7;
                    var7 = arg3;
                    var6['reason'] = var7;
                    var3['body'] = var6;
                    var6 = false;
                    var3['rejectWithError'] = var6;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=170);
 168:
                    return var3;
 170:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    var2 = var3;
                    if(!var4) { _fun0003_ip = 182; continue _fun0003 }
 179:
                    return var3;
 182:
                    return var2;
 185:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function _handleReportRaid() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 161; continue _fun0004 }
 13:
                    var3 = _closure1_slot4;
                    var2 = var3.getGuild;
                    var7 = var2.bind(var3)(var8);
                    var2 = null;
                    var4 = var2 != var7;
                    var3 = null;
                    if(!var4) { _fun0004_ip = 68; continue _fun0004 }
 41:
                    var9 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 8;
                    var4 = var5[var4];
                    var5 = undefined;
                    var4 = var9.bind(var5)(var4);
                    var3 = var4.bind(var5)(var7);
 68:
                    var3 = var2 == var3;
                    var2 = null;
                    if(var3) { _fun0004_ip = 158; continue _fun0004 }
 77:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {};
                    var7 = _closure1_slot6;
                    var6 = var7.GUILD_INCIDENT_REPORT_RAID;
                    var6 = var6.bind(var7)(var8);
                    var3['url'] = var6;
                    var6 = false;
                    var3['rejectWithError'] = var6;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=146);
 144:
                    return var3;
 146:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    var2 = var3;
                    if(!var4) { _fun0004_ip = 158; continue _fun0004 }
 155:
                    return var3;
 158:
                    return var2;
 161:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot5 = var7;
    var7 = var4.Endpoints;
    var _closure1_slot6 = var7;
    var4 = var4.GuildFeatures;
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_antiraid/GuildAntiRaidActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function trackReportRaidViewed(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var8 = arg1;
            var7 = arguments[1];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0005_ip = 16; continue _fun0005 }
 12:
            var7 = new Array(0);
 16:
            var3 = var7.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0005_ip = 127; continue _fun0005 }
 27:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 3;
            var2 = var10[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot5;
            var3 = var2.GUILD_RAID_REPORTED;
            var2 = {};
            var9 = _closure1_slot0;
            var6 = 4;
            var6 = var10[var6];
            var9 = var9.bind(var1)(var6);
            var6 = var9.collectGuildAnalyticsMetadata;
            var11 = var6.bind(var9)(var8);
            var12 = var2;
            var6 = copyDataProperties(var12, var11);
            var6 = 'guild_id';
            var2[var6] = var8;
            var6 = 'raid_types';
            var2[var6] = var7;
            var2 = var4.bind(var5)(var3, var2);
 127:
            return var1;
        }
    };
    var3['trackReportRaidViewed'] = var4;
    var4 = function setGuildRaidAlerts() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['setGuildRaidAlerts'] = var4;
    var4 = function setGuildIncidentActions() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['setGuildIncidentActions'] = var4;
    var4 = function handleResolveRaid() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['handleResolveRaid'] = var4;
    var2 = function handleReportRaid() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['handleReportRaid'] = var2;
    return var1;
})();
// app/modules/guild_settings/GuildSettingsFetchActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchGuildIntegrationsApplications() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 194; continue _fun0001 }
 13:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {};
                    var9 = _closure1_slot6;
                    var8 = var9.GUILD_INTEGRATIONS;
                    var8 = var8.bind(var9)(var7);
                    var2['url'] = var8;
                    var8 = true;
                    var9 = {'include_applications': true, 'include_role_connections_metadata': true};
                    var2['query'] = var9;
                    var2['oldFormErrors'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=109);
 107:
                    return var2;
 109:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 191; continue _fun0001 }
 115:
                    var8 = var2.body;
                    var5 = var8.map;
                    var3 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var4 = arg1;
                            var1 = {};
                            var10 = var1;
                            var9 = var4;
                            var2 = copyDataProperties(var10, var9);
                            var3 = 'application';
                            var5 = var3 in var4;
                            var2 = undefined;
                            if(!var5) { _fun0002_ip = 67; continue _fun0002 }
 28:
                            var7 = var4.application;
                            var5 = null;
                            var5 = var5 != var7;
                            var2 = undefined;
                            if(!var5) { _fun0002_ip = 67; continue _fun0002 }
 44:
                            var8 = _closure1_slot4;
                            var7 = var8.createFromServer;
                            var5 = var4.application;
                            var2 = var7.bind(var8)(var5);
 67:
                            var1[var3] = var2;
                            var3 = 'user';
                            var5 = var3 in var4;
                            var2 = undefined;
                            if(!var5) { _fun0002_ip = 133; continue _fun0002 }
 85:
                            var7 = var4.user;
                            var5 = null;
                            var5 = var5 != var7;
                            var2 = undefined;
                            if(!var5) { _fun0002_ip = 133; continue _fun0002 }
 101:
                            var6 = _closure1_slot5;
                            var10 = var4.user;
                            var5 = var6.prototype;
                            var5 = Object.create(var5, {constructor: {value: var6}});
                            var11 = var5;
                            var4 = new var11[var6](var10, var9);
                            var2 = var4 instanceof Object ? var4 : var5;
 133:
                            var1[var3] = var2;
                            return var1;
                        }
                    };
                    var3 = var5.bind(var8)(var3);
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'GUILD_SETTINGS_LOADED_INTEGRATIONS';
                    var4['type'] = var8;
                    var4['guildId'] = var7;
                    var4['integrations'] = var3;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 191:
                    return var2;
 194:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.BasicApplicationRecord;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/GuildSettingsFetchActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchGuildIntegrationsApplications() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchGuildIntegrationsApplications'] = var4;
    var2 = function fetchGuildEmbed(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        var6 = _closure1_slot6;
        var5 = var6.GUILD_WIDGET;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            var5 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'GUILD_SETTINGS_SET_WIDGET';
            var2['type'] = var6;
            var6 = var5.body;
            var6 = var6.enabled;
            var2['enabled'] = var6;
            var5 = var5.body;
            var5 = var5.channel_id;
            var2['channelId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['fetchGuildEmbed'] = var2;
    return var1;
})();
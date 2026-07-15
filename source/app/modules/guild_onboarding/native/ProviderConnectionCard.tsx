// app/modules/guild_onboarding/native/ProviderConnectionCard.tsx
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/native/ProviderConnectionCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ProviderConnectionCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.connection;
            var _closure2_slot0 = var3;
            var17 = var1.guildId;
            var _closure2_slot1 = var17;
            var16 = var1.location;
            var _closure2_slot2 = var16;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 4;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var14 = var5.bind(var4)();
            var _closure2_slot3 = var14;
            var5 = var3.provider_id;
            var6 = null;
            var5 = var6 != var5;
            var11 = null;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 5;
            var5 = var8[var5];
            var8 = var7.bind(var4)(var5);
            var7 = var8.get;
            var5 = var3.provider_id;
            var7 = var7.bind(var8)(var5);
            var8 = var6 == var7;
            var5 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var7.name;
case 4:
            var11 = var5;
case 2:
            if(!(var6 == var11)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 6;
            var7 = var10[var5];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var10[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.NzCoRx;
            var11 = var7.bind(var8)(var5);
case 6:
            var5 = var3.description;
            if(!(var6 != var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var3.description;
            var6 = var5.length;
            var5 = 0;
            if(!(!(var6 > var5))) { _fun0001_ip = 10; continue _fun0001 }
case 8:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 7;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var3.provider_id;
            var10 = var6.bind(var4)(var5);
            _fun0001_ip = 11; continue _fun0001;
case 10:
            var10 = var3.description;
case 11:
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 8;
            var5 = var12[var5];
            var7 = var6.bind(var4)(var5);
            var6 = var7.useStartProviderConnection;
            var5 = var3.provider_id;
            var5 = var6.bind(var7)(var5);
            var7 = var5.hasConnection;
            var6 = var5.canConnect;
            var18 = var5.startConnection;
            _closure2_slot4 = var18;
            var8 = var5.loading;
            var13 = _closure1_slot4;
            var15 = var13.useCallback;
            var9 = _closure1_slot3;
            var5 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var5 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 9;
                        var4 = var9[var3];
                        var3 = undefined;
                        var7 = var5.bind(var3)(var4);
                        var6 = var7.track;
                        var4 = _closure1_slot5;
                        var5 = var4.GUILD_ONBOARDING_CONNECTION_CLICKED;
                        var4 = {};
                        var8 = _closure1_slot0;
                        var2 = 10;
                        var2 = var9[var2];
                        var10 = var8.bind(var3)(var2);
                        var9 = var10.collectGuildAnalyticsMetadata;
                        var8 = _closure2_slot1;
                        var11 = var9.bind(var10)(var8);
                        var12 = var4;
                        var8 = copyDataProperties(var12, var11);
                        var9 = 'provider';
                        var8 = 'connection_type';
                        var4[7] = var9;
                        var8 = _closure2_slot0;
                        var8 = var8.provider_id;
                        var9 = null;
                        var10 = var9 != var8;
                        var9 = undefined;
                        if(!var10) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        var9 = var8;
case 14:
                        var8 = 'provider_id';
                        var4[7] = var9;
                        var9 = _closure2_slot2;
                        var8 = 'location';
                        var4[7] = var9;
                        var4 = var6.bind(var7)(var5, var4);
                        var4 = _closure2_slot4;
                        var2 = 'Guild Onboarding';
                        var2 = var4.bind(var3)(var2);
                        SaveGenerator(address=177);
case 16:
                        return var2;
case 17:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                        return var3;
case 18:
                        return var2;
case 12:
                        return var1;
                    }
                };
                return var1;
            };
            var9 = var9.bind(var4)(var5);
            var5 = new Array(4);
            var5[0] = var18;
            var5[1] = var17;
            var17 = var3.provider_id;
            var5[2] = var17;
            var5[3] = var16;
            var5 = var15.bind(var13)(var9, var5);
            var9 = var13.useMemo;
            var15 = var3.provider_id;
            var3 = new Array(2);
            var3[0] = var15;
            var3[1] = var14;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.provider_id;
                    var5 = null;
                    if(!(var5 == var1)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var4 = _closure1_slot6;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.LinkIcon;
                    var1 = {'size': 'lg', 'color': 'text-subtle'};
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
case 20:
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 5;
                    var2 = var8[var2];
                    var4 = undefined;
                    var7 = var3.bind(var4)(var2);
                    var3 = var7.get;
                    var2 = _closure2_slot0;
                    var2 = var2.provider_id;
                    var7 = var3.bind(var7)(var2);
                    var3 = _closure1_slot0;
                    var2 = 11;
                    var2 = var8[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.makeSource;
                    var9 = var5 == var7;
                    var8 = undefined;
                    if(var9) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var8 = var7.icon;
case 22:
                    var8 = var5 != var8;
                    var5 = null;
                    if(!var8) { _fun0003_ip = 8; continue _fun0003 }
case 24:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 12;
                    var8 = var10[var8];
                    var9 = var9.bind(var4)(var8);
                    var8 = var9.isThemeDark;
                    var6 = _closure2_slot3;
                    var6 = var8.bind(var9)(var6);
                    var7 = var7.icon;
                    if(var6) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var6 = var7.lightPNG;
                    _fun0003_ip = 27; continue _fun0003;
case 25:
                    var6 = var7.darkPNG;
case 27:
                    var5 = var6;
case 8:
                    var5 = var2.bind(var3)(var5);
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 13;
                    var1 = var6[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.Icon;
                    var1 = {};
                    var1['source'] = var5;
                    var5 = {'width': 32, 'height': 32};
                    var1['style'] = var5;
                    var5 = true;
                    var1['disableColor'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var9 = var9.bind(var13)(var2, var3);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = 15;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['displayName'] = var11;
            var1['description'] = var10;
            var1['icon'] = var9;
            var1['isLoading'] = var8;
            var1['isConnected'] = var7;
            var1['canConnect'] = var6;
            var1['onConnect'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
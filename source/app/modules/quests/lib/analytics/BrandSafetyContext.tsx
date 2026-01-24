// app/modules/quests/lib/analytics/BrandSafetyContext.tsx
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.getVisibleChannelIdsMethod;
    var _closure1_slot3 = var8;
    var4 = var4.getVisibleGuildIdsMethod;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/lib/analytics/BrandSafetyContext.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getBrandSafetyContext(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 5;
            var3 = var7[var1];
            var8 = undefined;
            var9 = var4.bind(var8)(var3);
            var3 = var9.isBillableQuestContent;
            var3 = var3.bind(var9)(var5);
            var1 = var7[var1];
            var4 = var4.bind(var8)(var1);
            var1 = var4.getAdContext;
            var4 = var1.bind(var4)(var5);
            var1 = _closure1_slot4;
            var9 = var1.bind(var8)();
            var1 = _closure1_slot3;
            var7 = var1.bind(var8)();
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var4.is_campaign_ias_enabled;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            if(!(var8 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            if(!(var8 !== var7)) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var4 = _closure1_slot7;
            var3 = var4.getGuildId;
            var3 = var3.bind(var4)();
            var5 = var1 != var3;
            var4 = null;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = _closure1_slot6;
            var5 = var10.getGuild;
            var4 = var5.bind(var10)(var3);
case 8:
            var5 = {};
            var11 = var9.bind(var8)();
            var10 = _closure1_slot6;
            var9 = var10.getGuilds;
            var9 = var9.bind(var10)();
            var _closure2_slot0 = var9;
            var10 = var11.map;
            var9 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var7 = var2[var1];
                    var6 = undefined;
                    if(!(var6 !== var7)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var1 = {};
                    var2 = var7.id;
                    var1['id'] = var2;
                    var2 = var7.name;
                    var1['name'] = var2;
                    var2 = var7.description;
                    var3 = null;
                    if(!(var3 !== var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var2 = var7.description;
                    var1['description'] = var2;
case 12:
                    var4 = var7.icon;
                    var2 = null;
                    if(!(var3 !== var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.getGuildIconURL;
                    var4 = {};
                    var8 = var7.id;
                    var4['id'] = var8;
                    var7 = var7.icon;
                    var4['icon'] = var7;
                    var7 = 44;
                    var4['size'] = var7;
                    var7 = true;
                    var4['canAnimate'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var5 = var3 != var4;
                    var2 = null;
                    if(!var5) { _fun0002_ip = 14; continue _fun0002 }
case 16:
                    var2 = var4;
case 14:
                    if(!(var3 !== var2)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var1['icon_url'] = var2;
case 17:
                    return var1;
case 10:
                    var1 = null;
                    return var1;
                }
            };
            var11 = var10.bind(var11)(var9);
            var10 = var11.filter;
            var9 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 !== var1;
                return var1;
            };
            var9 = var10.bind(var11)(var9);
            var5['guilds'] = var9;
            if(!(var1 != var4)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var10 = var7.bind(var8)();
            var9 = var10.map;
            var7 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getChannel;
                    var1 = arg1;
                    var2 = var2.bind(var3)(var1);
                    var1 = undefined;
                    if(!(var1 !== var2)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var1 = {};
                    var3 = var2.id;
                    var1['id'] = var3;
                    var3 = var2.name;
                    var1['name'] = var3;
                    var3 = var2.topic;
                    var4 = var3.length;
                    var3 = 0;
                    if(!(var4 > var3)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var2 = var2.topic;
                    var1['channel_topic'] = var2;
case 23:
                    return var1;
case 21:
                    var1 = null;
                    return var1;
                }
            };
            var9 = var9.bind(var10)(var7);
            var7 = var9.filter;
            var6 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 !== var1;
                return var1;
            };
            var6 = var7.bind(var9)(var6);
            _fun0001_ip = 25; continue _fun0001;
case 19:
            var6 = new Array(0);
case 25:
            var5['channels'] = var6;
            if(!(var1 != var3)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var5['selected_guild_id'] = var3;
case 26:
            var3 = var1 == var4;
            var6 = undefined;
            if(var3) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var6 = var4.banner;
case 28:
            var3 = null;
            if(!(var1 !== var6)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var7 = var1 == var4;
            var6 = undefined;
            if(var7) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var6 = var4.banner;
case 32:
            var3 = null;
            if(!(var8 !== var6)) { _fun0001_ip = 30; continue _fun0001 }
case 34:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 6;
            var6 = var9[var6];
            var8 = var7.bind(var8)(var6);
            var7 = var8.getGuildBannerURL;
            var6 = {};
            var9 = var4.id;
            var6['id'] = var9;
            var4 = var4.banner;
            var6['banner'] = var4;
            var4 = true;
            var4 = var7.bind(var8)(var6, var4);
            var6 = var1 != var4;
            var3 = null;
            if(!var6) { _fun0001_ip = 30; continue _fun0001 }
case 35:
            var3 = var4;
case 30:
            if(!(var1 !== var3)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var5['selected_guild_banner_url'] = var3;
case 36:
            var3 = var5.guilds;
            var4 = var3.length;
            var3 = _closure1_slot8;
            if(!(var4 > var3)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var7 = var5.guilds;
            var6 = var7.slice;
            var4 = _closure1_slot8;
            var3 = 0;
            var3 = var6.bind(var7)(var3, var4);
            var5['guilds'] = var3;
            var3 = true;
            var5['truncated'] = var3;
case 38:
            var3 = var5.channels;
            var4 = var3.length;
            var3 = _closure1_slot8;
            if(!(var4 > var3)) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var6 = var5.channels;
            var4 = var6.slice;
            var3 = _closure1_slot8;
            var2 = 0;
            var2 = var4.bind(var6)(var2, var3);
            var5['channels'] = var2;
            var2 = true;
            var5['truncated'] = var2;
case 40:
            var2 = {};
            var3 = global;
            var4 = var3.JSON;
            var3 = var4.stringify;
            var3 = var3.bind(var4)(var5);
            var2['brand_safety_context'] = var3;
            return var2;
case 2:
            return var1;
        }
    };
    var3['getBrandSafetyContext'] = var2;
    return var1;
})();
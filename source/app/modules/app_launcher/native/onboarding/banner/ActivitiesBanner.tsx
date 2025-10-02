// app/modules/app_launcher/native/onboarding/banner/ActivitiesBanner.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/onboarding/banner/ActivitiesBanner.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivitiesBanner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.context;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var1 = var7[var1];
            var5 = undefined;
            var3 = var2.bind(var5)(var1);
            var2 = var3.useActivityApplications;
            var1 = {};
            var4 = var4.channel;
            var4 = var4.guild_id;
            var1['guildId'] = var4;
            var4 = false;
            var1['fetchesShelf'] = var4;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var5)(var3, var1);
            var1 = 0;
            var10 = var2[var1];
            var1 = 1;
            var2 = var2[var1];
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var1 = 4;
            var1 = var7[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['firstApplication'] = var10;
            var1['secondApplication'] = var2;
            var7 = var4.bind(var5)(var3, var1);
            var3 = null;
            var4 = var3 == var10;
            var1 = null;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3 == var2;
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 5;
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['image'] = var7;
            var7 = _closure1_slot0;
            var6 = 6;
            var8 = var11[var6];
            var8 = var7.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var6 = var11[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.t;
            var7 = var6.zHMWub;
            var6 = {};
            var10 = var10.name;
            var6['activityName'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['text'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
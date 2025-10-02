// app/modules/game_store/getAnalyticsDataForSKU.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SKUFeatureTypes;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_store/getAnalyticsDataForSKU.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getAnalyticsDataForSKU(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var1 = arguments[1];
            var6 = arguments[2];
            var2 = undefined;
            if(!(var1 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            if(!(var6 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = true;
case 4:
            var4 = _closure1_slot0;
            var3 = var4.getApplication;
            var2 = var7.applicationId;
            var8 = var3.bind(var4)(var2);
            var2 = var7.getPrice;
            var9 = var2.bind(var7)();
            var4 = var7.getPrice;
            var2 = null;
            var3 = false;
            var10 = var4.bind(var7)(var2, var3);
            var4 = {};
            var3 = var7.id;
            var4['sku_id'] = var3;
            var3 = var7.type;
            var4['sku_type'] = var3;
            var3 = var7.applicationId;
            var4['application_id'] = var3;
            var11 = var2 != var8;
            var3 = null;
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var8.name;
case 6:
            var4['application_name'] = var3;
            var3 = var7.name;
            var4['store_title'] = var3;
            var8 = var7.premium;
            var3 = 'distribution';
            if(!var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = 'premium';
case 8:
            var4['distribution_type'] = var3;
            var3 = null;
            if(!var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = {};
            var11 = var2 != var9;
            var8 = null;
            if(!var11) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var9.amount;
case 12:
            var6['price'] = var8;
            var11 = var2 != var10;
            var8 = null;
            if(!var11) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var8 = var10.amount;
case 14:
            var6['regular_price'] = var8;
            var10 = var2 != var9;
            var8 = null;
            if(!var10) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = var9.currency;
case 16:
            var6['currency'] = var8;
            var3 = var6;
case 10:
            var2 = null;
            if(!var1) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var1 = {};
            var8 = var7.hasFeature;
            var5 = _closure1_slot1;
            var6 = var5.SINGLE_PLAYER;
            var6 = var8.bind(var7)(var6);
            var1['has_single_player'] = var6;
            var8 = var7.hasFeature;
            var6 = var5.ONLINE_MULTIPLAYER;
            var6 = var8.bind(var7)(var6);
            var1['has_online_multiplayer'] = var6;
            var8 = var7.hasFeature;
            var6 = var5.LOCAL_MULTIPLAYER;
            var6 = var8.bind(var7)(var6);
            var1['has_local_multiplayer'] = var6;
            var8 = var7.hasFeature;
            var6 = var5.PVP;
            var6 = var8.bind(var7)(var6);
            var1['has_pvp_features'] = var6;
            var8 = var7.hasFeature;
            var6 = var5.LOCAL_COOP;
            var6 = var8.bind(var7)(var6);
            var1['has_local_coop'] = var6;
            var8 = var7.hasFeature;
            var6 = var5.ONLINE_COOP;
            var6 = var8.bind(var7)(var6);
            var1['has_online_coop'] = var6;
            var8 = var7.hasFeature;
            var6 = var5.CROSS_PLATFORM;
            var6 = var8.bind(var7)(var6);
            var1['has_cross_platform'] = var6;
            var8 = var7.hasFeature;
            var6 = var5.RICH_PRESENCE;
            var6 = var8.bind(var7)(var6);
            var1['has_rich_presence'] = var6;
            var8 = var7.hasFeature;
            var6 = var5.DISCORD_GAME_INVITES;
            var6 = var8.bind(var7)(var6);
            var1['has_game_invites'] = var6;
            var8 = var7.hasFeature;
            var6 = var5.SPECTATOR_MODE;
            var6 = var8.bind(var7)(var6);
            var1['has_spectator_mode'] = var6;
            var8 = var7.hasFeature;
            var6 = var5.CONTROLLER_SUPPORT;
            var6 = var8.bind(var7)(var6);
            var1['has_controller_support'] = var6;
            var8 = var7.hasFeature;
            var6 = var5.CLOUD_SAVES;
            var6 = var8.bind(var7)(var6);
            var1['has_cloud_saves'] = var6;
            var6 = var7.hasFeature;
            var5 = var5.SECURE_NETWORKING;
            var5 = var6.bind(var7)(var5);
            var1['has_secure_networking'] = var5;
            var2 = var1;
case 18:
            var1 = {};
            var13 = var1;
            var12 = var4;
            var4 = copyDataProperties(var13, var12);
            var13 = var1;
            var12 = var3;
            var3 = copyDataProperties(var13, var12);
            var13 = var1;
            var12 = var2;
            var2 = copyDataProperties(var13, var12);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
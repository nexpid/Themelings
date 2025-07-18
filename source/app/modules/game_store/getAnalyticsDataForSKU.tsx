// app/modules/game_store/getAnalyticsDataForSKU.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native3;
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
 0:
            var7 = arg1;
            var1 = arguments[1];
            var6 = arguments[2];
            var2 = undefined;
            if(!(var1 === var2)) { _fun0001_ip = 17; continue _fun0001 }
 15:
            var1 = false;
 17:
            if(!(var6 === var2)) { _fun0001_ip = 23; continue _fun0001 }
 21:
            var6 = true;
 23:
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
            if(!var11) { _fun0001_ip = 118; continue _fun0001 }
 113:
            var3 = var8.name;
 118:
            var4['application_name'] = var3;
            var3 = var7.name;
            var4['store_title'] = var3;
            var8 = var7.premium;
            var3 = 'distribution';
            if(!var8) { _fun0001_ip = 150; continue _fun0001 }
 146:
            var3 = 'premium';
 150:
            var4['distribution_type'] = var3;
            var3 = null;
            if(!var6) { _fun0001_ip = 227; continue _fun0001 }
 162:
            var6 = {};
            var11 = var2 != var9;
            var8 = null;
            if(!var11) { _fun0001_ip = 179; continue _fun0001 }
 173:
            var8 = var9.amount;
 179:
            var6['price'] = var8;
            var11 = var2 != var10;
            var8 = null;
            if(!var11) { _fun0001_ip = 199; continue _fun0001 }
 193:
            var8 = var10.amount;
 199:
            var6['regular_price'] = var8;
            var10 = var2 != var9;
            var8 = null;
            if(!var10) { _fun0001_ip = 219; continue _fun0001 }
 213:
            var8 = var9.currency;
 219:
            var6['currency'] = var8;
            var3 = var6;
 227:
            var2 = null;
            if(!var1) { _fun0001_ip = 556; continue _fun0001 }
 235:
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
 556:
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
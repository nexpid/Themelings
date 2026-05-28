// app/modules/premium/powerups/utils/storeListingToGuildPowerup.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.DEFAULT_SOUND_SLOTS;
    var _closure1_slot0 = var7;
    var4 = var4.DEFAULT_STICKER_SLOTS;
    var _closure1_slot1 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildPowerupType;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_EMOJI_SLOTS;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/utils/storeListingToGuildPowerup.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function storeListingToGuildPowerup(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var17 = arg1;
            var2 = arg2;
            var3 = var2.powerup_metadata;
            var16 = null;
            var4 = var16 == var3;
            var1 = undefined;
            var6 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var3.category_type;
case 2:
            if(!(var16 != var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2.sku;
            var4 = var16 == var3;
            var5 = undefined;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var3.powerup_metadata;
case 6:
            if(!(var16 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 8:
            var3 = {};
            var4 = var2.summary;
            var3['title'] = var4;
            var4 = var2.sku;
            var4 = var4.id;
            var3['skuId'] = var4;
            var4 = var5.boost_price;
            var3['cost'] = var4;
            var4 = var2.sku;
            var4 = var4.dependent_sku_id;
            if(!(var16 == var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = new Array(0);
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var7 = var2.sku;
            var8 = var7.dependent_sku_id;
            var7 = new Array(1);
            var7[0] = var8;
            var4 = var7;
case 11:
            var3['dependencies'] = var4;
            var7 = var2.powerup_metadata;
            var8 = var16 == var7;
            var4 = undefined;
            if(var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var7.animated_image_url;
case 12:
            if(!(var16 == var4)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var5.animated_image_url;
case 14:
            var3['animatedImageUrl'] = var4;
            var7 = var2.powerup_metadata;
            var8 = var16 == var7;
            var4 = undefined;
            if(var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = var7.static_image_url;
case 16:
            if(!(var16 == var4)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = var5.static_image_url;
case 18:
            var3['staticImageUrl'] = var4;
            var5 = var2.powerup_metadata;
            var7 = var16 == var5;
            var4 = undefined;
            if(var7) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var4 = var5.store_removal_date;
case 20:
            var3['storeRemovalDate'] = var4;
            var5 = var2.powerup_metadata;
            var7 = var16 == var5;
            var4 = undefined;
            if(var7) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var4 = var5.deactivation_cooldown_period_days;
case 22:
            var3['deactivationCooldownPeriodDays'] = var4;
            var5 = _closure1_slot2;
            var5 = var5.LEVEL;
            if(!(var5 !== var6)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = _closure1_slot2;
            var5 = var5.PERK;
            if(!(var5 !== var6)) { _fun0001_ip = 26; continue _fun0001 }
case 4:
            return var1;
case 26:
            var5 = {};
            var6 = _closure1_slot2;
            var6 = var6.PERK;
            var5['type'] = var6;
            var7 = var2.description;
            var8 = var16 != var7;
            var6 = '';
            if(!var8) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var6 = var7;
case 27:
            var5['description'] = var6;
            var25 = var5;
            var24 = var3;
            var6 = copyDataProperties(var25, var24);
            return var5;
case 24:
            var5 = var2.sku;
            var6 = var5.powerup_metadata;
            var7 = var16 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var5 = var6.guild_features;
case 29:
            if(!(var16 != var5)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var7 = _closure1_slot3;
            var6 = var5.additional_emoji_slots;
            var14 = var7 + var6;
            var7 = _closure1_slot0;
            var6 = var5.additional_sound_slots;
            var13 = var7 + var6;
            var9 = _closure1_slot1;
            var6 = var5.additional_sticker_slots;
            var12 = var9 + var6;
            var2 = var2.sku;
            var2 = var2.dependent_sku_id;
            var _closure2_slot0 = var2;
            var2 = var16 != var2;
            var11 = undefined;
            var10 = undefined;
            var9 = undefined;
            var8 = var14;
            var7 = var13;
            var6 = var12;
            if(!var2) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var19 = var17.find;
            var2 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1.sku;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var22 = var19.bind(var17)(var2);
            var2 = var16 == var22;
            var19 = undefined;
            if(var2) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var2 = var22.sku;
            var20 = var16 == var2;
            var11 = var2;
            var19 = undefined;
            if(var20) { _fun0001_ip = 35; continue _fun0001 }
case 37:
            var2 = var2.powerup_metadata;
            var20 = var16 == var2;
            var11 = var2;
            var19 = undefined;
            if(var20) { _fun0001_ip = 35; continue _fun0001 }
case 38:
            var20 = var2.guild_features;
            var2 = var16 == var20;
            var11 = var20;
            var19 = undefined;
            if(var2) { _fun0001_ip = 35; continue _fun0001 }
case 39:
            var19 = var20.additional_emoji_slots;
            var11 = var20;
case 35:
            var20 = var16 != var19;
            var2 = 0;
            if(!var20) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var2 = var19;
case 40:
            var21 = var14 + var2;
            var2 = var16 == var22;
            var19 = undefined;
            if(var2) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var2 = var22.sku;
            var20 = var16 == var2;
            var10 = var2;
            var19 = undefined;
            if(var20) { _fun0001_ip = 42; continue _fun0001 }
case 44:
            var2 = var2.powerup_metadata;
            var20 = var16 == var2;
            var10 = var2;
            var19 = undefined;
            if(var20) { _fun0001_ip = 42; continue _fun0001 }
case 45:
            var20 = var2.guild_features;
            var2 = var16 == var20;
            var10 = var20;
            var19 = undefined;
            if(var2) { _fun0001_ip = 42; continue _fun0001 }
case 46:
            var19 = var20.additional_sound_slots;
            var10 = var20;
case 42:
            var20 = var16 != var19;
            var2 = 0;
            if(!var20) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var2 = var19;
case 47:
            var20 = var13 + var2;
            var2 = var16 == var22;
            var19 = undefined;
            if(var2) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var2 = var22.sku;
            var23 = var16 == var2;
            var9 = var2;
            var19 = undefined;
            if(var23) { _fun0001_ip = 49; continue _fun0001 }
case 51:
            var2 = var2.powerup_metadata;
            var23 = var16 == var2;
            var9 = var2;
            var19 = undefined;
            if(var23) { _fun0001_ip = 49; continue _fun0001 }
case 52:
            var23 = var2.guild_features;
            var2 = var16 == var23;
            var9 = var23;
            var19 = undefined;
            if(var2) { _fun0001_ip = 49; continue _fun0001 }
case 53:
            var19 = var23.additional_sticker_slots;
            var9 = var23;
case 49:
            var23 = var16 != var19;
            var2 = 0;
            if(!var23) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var2 = var19;
case 54:
            var19 = var12 + var2;
            var23 = var16 == var22;
            var2 = undefined;
            if(var23) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var22 = var22.sku;
            var2 = var22.dependent_sku_id;
case 56:
            _closure2_slot0 = var2;
            var14 = var21;
            var13 = var20;
            var12 = var19;
            var8 = var14;
            var7 = var13;
            var6 = var12;
            if(var16 != var2) { _fun0001_ip = 34; continue _fun0001 }
case 33:
            var2 = {};
            var4 = _closure1_slot2;
            var4 = var4.LEVEL;
            var2['type'] = var4;
            var4 = {};
            var25 = var4;
            var24 = var5;
            var5 = copyDataProperties(var25, var24);
            var5 = 'total_emoji_slots';
            var4[4] = var8;
            var5 = 'total_sound_slots';
            var4[4] = var7;
            var5 = 'total_sticker_slots';
            var4[4] = var6;
            var2['features'] = var4;
            var25 = var2;
            var24 = var3;
            var3 = copyDataProperties(var25, var24);
            return var2;
case 31:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
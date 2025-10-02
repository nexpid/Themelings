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
            var5 = var16 == var3;
            var4 = undefined;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var3.powerup_metadata;
case 6:
            if(!(var16 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 8:
            var3 = {};
            var5 = var2.summary;
            var3['title'] = var5;
            var5 = var2.sku;
            var5 = var5.id;
            var3['skuId'] = var5;
            var4 = var4.boost_price;
            var3['cost'] = var4;
            var4 = var2.sku;
            var4 = var4.dependent_sku_id;
            if(!(var16 == var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = new Array(0);
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var5 = var2.sku;
            var7 = var5.dependent_sku_id;
            var5 = new Array(1);
            var5[0] = var7;
            var4 = var5;
case 11:
            var3['dependencies'] = var4;
            var5 = var2.powerup_metadata;
            var7 = var16 == var5;
            var4 = undefined;
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var5.animated_image_url;
case 12:
            var3['animatedImageUrl'] = var4;
            var5 = var2.powerup_metadata;
            var7 = var16 == var5;
            var4 = undefined;
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var5.static_image_url;
case 14:
            var3['staticImageUrl'] = var4;
            var5 = var2.powerup_metadata;
            var7 = var16 == var5;
            var4 = undefined;
            if(var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = var5.store_removal_date;
case 16:
            var3['storeRemovalDate'] = var4;
            var5 = _closure1_slot2;
            var5 = var5.LEVEL;
            if(!(var5 !== var6)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var5 = _closure1_slot2;
            var5 = var5.PERK;
            if(!(var5 !== var6)) { _fun0001_ip = 20; continue _fun0001 }
case 4:
            return var1;
case 20:
            var5 = {};
            var6 = _closure1_slot2;
            var6 = var6.PERK;
            var5['type'] = var6;
            var7 = var2.description;
            var8 = var16 != var7;
            var6 = '';
            if(!var8) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var6 = var7;
case 21:
            var5['description'] = var6;
            var25 = var5;
            var24 = var3;
            var6 = copyDataProperties(var25, var24);
            return var5;
case 18:
            var5 = var2.sku;
            var6 = var5.powerup_metadata;
            var7 = var16 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var5 = var6.guild_features;
case 23:
            if(!(var16 != var5)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
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
            if(!var2) { _fun0001_ip = 27; continue _fun0001 }
case 28:
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
            if(var2) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var2 = var22.sku;
            var20 = var16 == var2;
            var11 = var2;
            var19 = undefined;
            if(var20) { _fun0001_ip = 29; continue _fun0001 }
case 31:
            var2 = var2.powerup_metadata;
            var20 = var16 == var2;
            var11 = var2;
            var19 = undefined;
            if(var20) { _fun0001_ip = 29; continue _fun0001 }
case 32:
            var20 = var2.guild_features;
            var2 = var16 == var20;
            var11 = var20;
            var19 = undefined;
            if(var2) { _fun0001_ip = 29; continue _fun0001 }
case 33:
            var19 = var20.additional_emoji_slots;
            var11 = var20;
case 29:
            var20 = var16 != var19;
            var2 = 0;
            if(!var20) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var2 = var19;
case 34:
            var21 = var14 + var2;
            var2 = var16 == var22;
            var19 = undefined;
            if(var2) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var2 = var22.sku;
            var20 = var16 == var2;
            var10 = var2;
            var19 = undefined;
            if(var20) { _fun0001_ip = 36; continue _fun0001 }
case 38:
            var2 = var2.powerup_metadata;
            var20 = var16 == var2;
            var10 = var2;
            var19 = undefined;
            if(var20) { _fun0001_ip = 36; continue _fun0001 }
case 39:
            var20 = var2.guild_features;
            var2 = var16 == var20;
            var10 = var20;
            var19 = undefined;
            if(var2) { _fun0001_ip = 36; continue _fun0001 }
case 40:
            var19 = var20.additional_sound_slots;
            var10 = var20;
case 36:
            var20 = var16 != var19;
            var2 = 0;
            if(!var20) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var2 = var19;
case 41:
            var20 = var13 + var2;
            var2 = var16 == var22;
            var19 = undefined;
            if(var2) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var2 = var22.sku;
            var23 = var16 == var2;
            var9 = var2;
            var19 = undefined;
            if(var23) { _fun0001_ip = 43; continue _fun0001 }
case 45:
            var2 = var2.powerup_metadata;
            var23 = var16 == var2;
            var9 = var2;
            var19 = undefined;
            if(var23) { _fun0001_ip = 43; continue _fun0001 }
case 46:
            var23 = var2.guild_features;
            var2 = var16 == var23;
            var9 = var23;
            var19 = undefined;
            if(var2) { _fun0001_ip = 43; continue _fun0001 }
case 47:
            var19 = var23.additional_sticker_slots;
            var9 = var23;
case 43:
            var23 = var16 != var19;
            var2 = 0;
            if(!var23) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var2 = var19;
case 48:
            var19 = var12 + var2;
            var23 = var16 == var22;
            var2 = undefined;
            if(var23) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var22 = var22.sku;
            var2 = var22.dependent_sku_id;
case 50:
            _closure2_slot0 = var2;
            var14 = var21;
            var13 = var20;
            var12 = var19;
            var8 = var14;
            var7 = var13;
            var6 = var12;
            if(var16 != var2) { _fun0001_ip = 28; continue _fun0001 }
case 27:
            var2 = {};
            var4 = _closure1_slot2;
            var4 = var4.LEVEL;
            var2['type'] = var4;
            var4 = {};
            var25 = var4;
            var24 = var5;
            var5 = copyDataProperties(var25, var24);
            var5 = 'total_emoji_slots';
            var4[var5] = var8;
            var5 = 'total_sound_slots';
            var4[var5] = var7;
            var5 = 'total_sticker_slots';
            var4[var5] = var6;
            var2['features'] = var4;
            var25 = var2;
            var24 = var3;
            var3 = copyDataProperties(var25, var24);
            return var2;
case 25:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
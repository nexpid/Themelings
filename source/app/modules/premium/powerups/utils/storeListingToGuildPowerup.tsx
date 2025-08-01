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
 0:
            var17 = arg1;
            var2 = arg2;
            var3 = var2.powerup_metadata;
            var16 = null;
            var4 = var16 == var3;
            var1 = undefined;
            var6 = undefined;
            if(var4) { _fun0001_ip = 35; continue _fun0001 }
 27:
            var6 = var3.category_type;
 35:
            if(!(var16 != var6)) { _fun0001_ip = 282; continue _fun0001 }
 42:
            var3 = var2.sku;
            var5 = var16 == var3;
            var4 = undefined;
            if(var5) { _fun0001_ip = 63; continue _fun0001 }
 57:
            var4 = var3.powerup_metadata;
 63:
            if(!(var16 != var4)) { _fun0001_ip = 282; continue _fun0001 }
 70:
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
            if(!(var16 == var4)) { _fun0001_ip = 133; continue _fun0001 }
 127:
            var4 = new Array(0);
            _fun0001_ip = 156; continue _fun0001;
 133:
            var5 = var2.sku;
            var7 = var5.dependent_sku_id;
            var5 = new Array(1);
            var5[0] = var7;
            var4 = var5;
 156:
            var3['dependencies'] = var4;
            var5 = var2.powerup_metadata;
            var7 = var16 == var5;
            var4 = undefined;
            if(var7) { _fun0001_ip = 184; continue _fun0001 }
 176:
            var4 = var5.animated_image_url;
 184:
            var3['animatedImageUrl'] = var4;
            var5 = var2.powerup_metadata;
            var7 = var16 == var5;
            var4 = undefined;
            if(var7) { _fun0001_ip = 214; continue _fun0001 }
 206:
            var4 = var5.static_image_url;
 214:
            var3['staticImageUrl'] = var4;
            var5 = var2.powerup_metadata;
            var7 = var16 == var5;
            var4 = undefined;
            if(var7) { _fun0001_ip = 244; continue _fun0001 }
 236:
            var4 = var5.store_removal_date;
 244:
            var3['storeRemovalDate'] = var4;
            var5 = _closure1_slot2;
            var5 = var5.LEVEL;
            if(!(var5 !== var6)) { _fun0001_ip = 335; continue _fun0001 }
 268:
            var5 = _closure1_slot2;
            var5 = var5.PERK;
            if(!(var5 !== var6)) { _fun0001_ip = 284; continue _fun0001 }
 282:
            return var1;
 284:
            var5 = {};
            var6 = _closure1_slot2;
            var6 = var6.PERK;
            var5['type'] = var6;
            var7 = var2.description;
            var8 = var16 != var7;
            var6 = '';
            if(!var8) { _fun0001_ip = 319; continue _fun0001 }
 316:
            var6 = var7;
 319:
            var5['description'] = var6;
            var25 = var5;
            var24 = var3;
            var6 = copyDataProperties(var25, var24);
            return var5;
 335:
            var5 = var2.sku;
            var6 = var5.powerup_metadata;
            var7 = var16 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 362; continue _fun0001 }
 356:
            var5 = var6.guild_features;
 362:
            if(!(var16 != var5)) { _fun0001_ip = 856; continue _fun0001 }
 369:
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
            if(!var2) { _fun0001_ip = 784; continue _fun0001 }
 452:
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
            if(var2) { _fun0001_ip = 542; continue _fun0001 }
 479:
            var2 = var22.sku;
            var20 = var16 == var2;
            var11 = var2;
            var19 = undefined;
            if(var20) { _fun0001_ip = 542; continue _fun0001 }
 497:
            var2 = var2.powerup_metadata;
            var20 = var16 == var2;
            var11 = var2;
            var19 = undefined;
            if(var20) { _fun0001_ip = 542; continue _fun0001 }
 515:
            var20 = var2.guild_features;
            var2 = var16 == var20;
            var11 = var20;
            var19 = undefined;
            if(var2) { _fun0001_ip = 542; continue _fun0001 }
 533:
            var19 = var20.additional_emoji_slots;
            var11 = var20;
 542:
            var20 = var16 != var19;
            var2 = 0;
            if(!var20) { _fun0001_ip = 554; continue _fun0001 }
 551:
            var2 = var19;
 554:
            var21 = var14 + var2;
            var2 = var16 == var22;
            var19 = undefined;
            if(var2) { _fun0001_ip = 630; continue _fun0001 }
 567:
            var2 = var22.sku;
            var20 = var16 == var2;
            var10 = var2;
            var19 = undefined;
            if(var20) { _fun0001_ip = 630; continue _fun0001 }
 585:
            var2 = var2.powerup_metadata;
            var20 = var16 == var2;
            var10 = var2;
            var19 = undefined;
            if(var20) { _fun0001_ip = 630; continue _fun0001 }
 603:
            var20 = var2.guild_features;
            var2 = var16 == var20;
            var10 = var20;
            var19 = undefined;
            if(var2) { _fun0001_ip = 630; continue _fun0001 }
 621:
            var19 = var20.additional_sound_slots;
            var10 = var20;
 630:
            var20 = var16 != var19;
            var2 = 0;
            if(!var20) { _fun0001_ip = 642; continue _fun0001 }
 639:
            var2 = var19;
 642:
            var20 = var13 + var2;
            var2 = var16 == var22;
            var19 = undefined;
            if(var2) { _fun0001_ip = 718; continue _fun0001 }
 655:
            var2 = var22.sku;
            var23 = var16 == var2;
            var9 = var2;
            var19 = undefined;
            if(var23) { _fun0001_ip = 718; continue _fun0001 }
 673:
            var2 = var2.powerup_metadata;
            var23 = var16 == var2;
            var9 = var2;
            var19 = undefined;
            if(var23) { _fun0001_ip = 718; continue _fun0001 }
 691:
            var23 = var2.guild_features;
            var2 = var16 == var23;
            var9 = var23;
            var19 = undefined;
            if(var2) { _fun0001_ip = 718; continue _fun0001 }
 709:
            var19 = var23.additional_sticker_slots;
            var9 = var23;
 718:
            var23 = var16 != var19;
            var2 = 0;
            if(!var23) { _fun0001_ip = 730; continue _fun0001 }
 727:
            var2 = var19;
 730:
            var19 = var12 + var2;
            var23 = var16 == var22;
            var2 = undefined;
            if(var23) { _fun0001_ip = 755; continue _fun0001 }
 743:
            var22 = var22.sku;
            var2 = var22.dependent_sku_id;
 755:
            _closure2_slot0 = var2;
            var14 = var21;
            var13 = var20;
            var12 = var19;
            var8 = var14;
            var7 = var13;
            var6 = var12;
            if(var16 != var2) { _fun0001_ip = 452; continue _fun0001 }
 784:
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
 856:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
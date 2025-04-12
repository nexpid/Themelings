// app/modules/premium/powerups/utils/storeListingToGuildPowerup.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.DEFAULT_SOUND_SLOTS;
    var _closure1_slot0 = golfie;
    tangon = tangon.DEFAULT_STICKER_SLOTS;
    var _closure1_slot1 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildPowerupType;
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DEFAULT_EMOJI_SLOTS;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/powerups/utils/storeListingToGuildPowerup.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: storeListingToGuildPowerup
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            output = argFoo;
            michal = argBar;
            zuuluu = michal.powerup_metadata;
            sizing = null;
            tangon = sizing == zuuluu;
            entity = undefined;
            oscard = undefined;
            if(tangon) { _fun00002_ip = 35; continue _fun00001 }
 27:
            oscard = zuuluu.category_type;
 35:
            if(!(sizing != oscard)) { _fun00002_ip = 250; continue _fun00001 }
 42:
            zuuluu = michal.sku;
            report = sizing == zuuluu;
            tangon = undefined;
            if(report) { _fun00002_ip = 63; continue _fun00001 }
 57:
            tangon = zuuluu.powerup_metadata;
 63:
            if(!(sizing != tangon)) { _fun00002_ip = 250; continue _fun00001 }
 70:
            zuuluu = {};
            report = michal.summary;
            zuuluu['title'] = report;
            report = michal.sku;
            report = report.id;
            zuuluu['skuId'] = report;
            tangon = tangon.boost_price;
            zuuluu['cost'] = tangon;
            tangon = michal.sku;
            tangon = tangon.dependent_sku_id;
            if(!(sizing == tangon)) { _fun00002_ip = 131; continue _fun00001 }
 125:
            tangon = new Array(0);
            _fun00002_ip = 154; continue _fun00001;
 131:
            report = michal.sku;
            golfie = report.dependent_sku_id;
            report = new Array(1);
            report[0] = golfie;
            tangon = report;
 154:
            zuuluu['dependencies'] = tangon;
            report = michal.powerup_metadata;
            golfie = sizing == report;
            tangon = undefined;
            if(golfie) { _fun00002_ip = 182; continue _fun00001 }
 174:
            tangon = report.animated_image_url;
 182:
            zuuluu['animatedImageUrl'] = tangon;
            report = michal.powerup_metadata;
            golfie = sizing == report;
            tangon = undefined;
            if(golfie) { _fun00002_ip = 212; continue _fun00001 }
 204:
            tangon = report.static_image_url;
 212:
            zuuluu['staticImageUrl'] = tangon;
            report = _closure1_slot2;
            report = report.LEVEL;
            if(!(report !== oscard)) { _fun00002_ip = 303; continue _fun00001 }
 236:
            report = _closure1_slot2;
            report = report.PERK;
            if(!(report !== oscard)) { _fun00002_ip = 252; continue _fun00001 }
 250:
            return entity;
 252:
            report = {};
            oscard = _closure1_slot2;
            oscard = oscard.PERK;
            report['type'] = oscard;
            golfie = michal.description;
            option = sizing != golfie;
            oscard = '';
            if(!option) { _fun00002_ip = 287; continue _fun00001 }
 284:
            oscard = golfie;
 287:
            report['description'] = oscard;
            config = report;
            sequen = zuuluu;
            oscard = copyDataProperties(config, sequen);
            return report;
 303:
            report = michal.sku;
            oscard = report.powerup_metadata;
            golfie = sizing == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 330; continue _fun00001 }
 324:
            report = oscard.guild_features;
 330:
            if(!(sizing != report)) { _fun00002_ip = 823; continue _fun00001 }
 337:
            golfie = _closure1_slot3;
            oscard = report.additional_emoji_slots;
            backup = golfie + oscard;
            golfie = _closure1_slot0;
            oscard = report.additional_sound_slots;
            foxtra = golfie + oscard;
            verify = _closure1_slot1;
            oscard = report.additional_sticker_slots;
            romeon = verify + oscard;
            michal = michal.sku;
            michal = michal.dependent_sku_id;
            var _closure2_slot0 = michal;
            michal = sizing != michal;
            yankee = undefined;
            offset = undefined;
            verify = undefined;
            option = backup;
            golfie = foxtra;
            oscard = romeon;
            if(!michal) { _fun00002_ip = 751; continue _fun00001 }
 420:
            echoed = output.find;
            michal = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = entity.sku;
                entity = entity.id;
                entity = michal === entity;
                return entity;
            };
            ctrled = echoed.bind(output)(michal);
            michal = sizing == ctrled;
            echoed = undefined;
            if(michal) { _fun00002_ip = 509; continue _fun00001 }
 446:
            michal = ctrled.sku;
            update = sizing == michal;
            yankee = michal;
            echoed = undefined;
            if(update) { _fun00002_ip = 509; continue _fun00001 }
 464:
            michal = michal.powerup_metadata;
            update = sizing == michal;
            yankee = michal;
            echoed = undefined;
            if(update) { _fun00002_ip = 509; continue _fun00001 }
 482:
            update = michal.guild_features;
            michal = sizing == update;
            yankee = update;
            echoed = undefined;
            if(michal) { _fun00002_ip = 509; continue _fun00001 }
 500:
            echoed = update.additional_emoji_slots;
            yankee = update;
 509:
            update = sizing != echoed;
            michal = 0;
            if(!update) { _fun00002_ip = 521; continue _fun00001 }
 518:
            michal = echoed;
 521:
            source = backup + michal;
            michal = sizing == ctrled;
            echoed = undefined;
            if(michal) { _fun00002_ip = 597; continue _fun00001 }
 534:
            michal = ctrled.sku;
            update = sizing == michal;
            offset = michal;
            echoed = undefined;
            if(update) { _fun00002_ip = 597; continue _fun00001 }
 552:
            michal = michal.powerup_metadata;
            update = sizing == michal;
            offset = michal;
            echoed = undefined;
            if(update) { _fun00002_ip = 597; continue _fun00001 }
 570:
            update = michal.guild_features;
            michal = sizing == update;
            offset = update;
            echoed = undefined;
            if(michal) { _fun00002_ip = 597; continue _fun00001 }
 588:
            echoed = update.additional_sound_slots;
            offset = update;
 597:
            update = sizing != echoed;
            michal = 0;
            if(!update) { _fun00002_ip = 609; continue _fun00001 }
 606:
            michal = echoed;
 609:
            update = foxtra + michal;
            michal = sizing == ctrled;
            echoed = undefined;
            if(michal) { _fun00002_ip = 685; continue _fun00001 }
 622:
            michal = ctrled.sku;
            vacuum = sizing == michal;
            verify = michal;
            echoed = undefined;
            if(vacuum) { _fun00002_ip = 685; continue _fun00001 }
 640:
            michal = michal.powerup_metadata;
            vacuum = sizing == michal;
            verify = michal;
            echoed = undefined;
            if(vacuum) { _fun00002_ip = 685; continue _fun00001 }
 658:
            vacuum = michal.guild_features;
            michal = sizing == vacuum;
            verify = vacuum;
            echoed = undefined;
            if(michal) { _fun00002_ip = 685; continue _fun00001 }
 676:
            echoed = vacuum.additional_sticker_slots;
            verify = vacuum;
 685:
            vacuum = sizing != echoed;
            michal = 0;
            if(!vacuum) { _fun00002_ip = 697; continue _fun00001 }
 694:
            michal = echoed;
 697:
            echoed = romeon + michal;
            vacuum = sizing == ctrled;
            michal = undefined;
            if(vacuum) { _fun00002_ip = 722; continue _fun00001 }
 710:
            ctrled = ctrled.sku;
            michal = ctrled.dependent_sku_id;
 722:
            _closure2_slot0 = michal;
            backup = source;
            foxtra = update;
            romeon = echoed;
            option = backup;
            golfie = foxtra;
            oscard = romeon;
            if(sizing != michal) { _fun00002_ip = 420; continue _fun00001 }
 751:
            michal = {};
            tangon = _closure1_slot2;
            tangon = tangon.LEVEL;
            michal['type'] = tangon;
            tangon = {};
            config = tangon;
            sequen = report;
            report = copyDataProperties(config, sequen);
            report = 'total_emoji_slots';
            tangon[report] = option;
            report = 'total_sound_slots';
            tangon[report] = golfie;
            report = 'total_sticker_slots';
            tangon[report] = oscard;
            michal['features'] = tangon;
            config = michal;
            sequen = zuuluu;
            zuuluu = copyDataProperties(config, sequen);
            return michal;
 823:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();
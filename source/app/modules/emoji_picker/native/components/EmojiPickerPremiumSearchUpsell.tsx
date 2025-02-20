// app/modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    kiloes = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = kiloes;
    var _closure1_slot2 = verify;
    report = function(argFoo) { // Original name: useEmojiPickerPremiumSearchUpsellViewed
        michal = argFoo;
        golfie = michal.guildId;
        var _closure2_slot0 = golfie;
        option = michal.analyticsLocations;
        var _closure2_slot1 = option;
        oscard = michal.useTier0UpsellContent;
        var _closure2_slot2 = oscard;
        report = _closure1_slot3;
        tangon = report.useRef;
        zuuluu = false;
        report = tangon.bind(report)(zuuluu);
        var _closure2_slot3 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useEffect;
        michal = new Array(4);
        michal[0] = option;
        michal[1] = golfie;
        michal[2] = oscard;
        michal[3] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot3;
                entity = entity.current;
                if(entity) { _fun00002_ip = 188; continue _fun00001 }
 18:
                michal = _closure2_slot3;
                entity = true;
                michal['current'] = entity;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.track;
                entity = _closure1_slot6;
                michal = entity.PREMIUM_UPSELL_VIEWED;
                entity = {};
                golfie = _closure1_slot10;
                golfie = golfie.EMOJI_PICKER_SEARCH;
                entity['type'] = golfie;
                golfie = {};
                verify = _closure2_slot0;
                option = null;
                if(!(option == verify)) { _fun00002_ip = 110; continue _fun00001 }
 98:
                option = _closure1_slot7;
                option = option.DM_CHANNEL;
                _fun00002_ip = 120; continue _fun00001;
 110:
                verify = _closure1_slot7;
                option = verify.GUILD_CHANNEL;
 120:
                golfie['page'] = option;
                option = _closure1_slot8;
                option = option.EMOJI_PICKER_POPOUT;
                golfie['section'] = option;
                entity['location'] = golfie;
                golfie = _closure2_slot1;
                entity['location_stack'] = golfie;
                report = _closure2_slot2;
                oscard = _closure1_slot9;
                if(report) { _fun00002_ip = 171; continue _fun00001 }
 163:
                report = oscard.TIER_2;
                _fun00002_ip = 177; continue _fun00001;
 171:
                report = oscard.TIER_0;
 177:
                entity['sku_id'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
 188:
                entity = undefined;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        entity = undefined;
        return entity;
    };
    var _closure1_slot15 = report;
    tangon = function(argFoo) { // Original name: useEmojiPickerPremiumSearchUpsellClick
        michal = argFoo;
        oscard = michal.analyticsLocations;
        var _closure2_slot0 = oscard;
        report = michal.useTier0UpsellContent;
        var _closure2_slot1 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useCallback;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure1_slot5;
                entity = michal.getCurrentUser;
                tangon = entity.bind(michal)();
                entity = null;
                entity = entity == tangon;
                if(entity) { _fun00004_ip = 58; continue _fun00003 }
 25:
                report = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 9;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                michal = zuuluu.canUseEmojisEverywhere;
                entity = michal.bind(zuuluu)(tangon);
 58:
                if(entity) { _fun00004_ip = 220; continue _fun00003 }
 64:
                zuuluu = _closure1_slot1;
                entity = _closure1_slot2;
                michal = 10;
                michal = entity[michal];
                option = undefined;
                tangon = zuuluu.bind(option)(michal);
                michal = tangon.hideActionSheet;
                michal = michal.bind(tangon)();
                michal = 11;
                michal = entity[michal];
                tangon = zuuluu.bind(option)(michal);
                zuuluu = tangon.pushLazy;
                report = _closure1_slot0;
                michal = 13;
                michal = entity[michal];
                report = report.bind(option)(michal);
                michal = 12;
                michal = entity[michal];
                entity = entity.paths;
                michal = report.bind(option)(michal, entity);
                entity = {};
                golfie = _closure2_slot0;
                entity['analyticsLocations'] = golfie;
                report = _closure2_slot1;
                golfie = _closure1_slot0;
                verify = _closure1_slot2;
                oscard = 14;
                oscard = verify[oscard];
                oscard = golfie.bind(option)(oscard);
                oscard = oscard.PremiumFeatureCardOrder;
                if(report) { _fun00004_ip = 203; continue _fun00003 }
 195:
                report = oscard.TIER_2_LEADING;
                _fun00004_ip = 209; continue _fun00003;
 203:
                report = oscard.TIER_0_LEADING;
 209:
                entity['premiumFeatureCardOrder'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
 220:
                entity = undefined;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot16 = tangon;
    entity = global;
    offset = entity.Object;
    golfie = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    golfie = verify[entity];
    oscard = argCor;
    entity = undefined;
    offset = oscard.bind(entity)(golfie);
    var _closure1_slot3 = offset;
    oscard = 1;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.View;
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = verify[oscard];
    oscard = kiloes.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    golfie = oscard.AnalyticEvents;
    var _closure1_slot6 = golfie;
    golfie = oscard.AnalyticsPages;
    var _closure1_slot7 = golfie;
    oscard = oscard.AnalyticsSections;
    var _closure1_slot8 = oscard;
    oscard = 4;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    golfie = oscard.PremiumSubscriptionSKUs;
    var _closure1_slot9 = golfie;
    golfie = oscard.PremiumUpsellTypes;
    var _closure1_slot10 = golfie;
    oscard = oscard.SubscriptionPlans;
    var _closure1_slot11 = oscard;
    oscard = 5;
    golfie = verify[oscard];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot12 = golfie;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.jsxs;
    var _closure1_slot13 = oscard;
    oscard = 6;
    oscard = verify[oscard];
    romeon = option.bind(entity)(oscard);
    yankee = romeon.createStyles;
    golfie = {};
    oscard = {};
    backup = 7;
    foxtra = verify[backup];
    foxtra = kiloes.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_8;
    oscard['paddingTop'] = foxtra;
    golfie['container'] = oscard;
    foxtra = {'height': 56, 'padding': null, 'borderRadius': null, 'backgroundColor': null, 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'alignContent': 'center'};
    oscard = 56;
    sizing = verify[backup];
    sizing = kiloes.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_8;
    foxtra['padding'] = sizing;
    sizing = verify[backup];
    sizing = kiloes.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.xs;
    foxtra['borderRadius'] = sizing;
    backup = verify[backup];
    backup = kiloes.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_TERTIARY;
    foxtra['backgroundColor'] = backup;
    golfie['premiumSearchUpsell'] = foxtra;
    foxtra = {'flex': 0.8, 'flexDirection': 'row'};
    golfie['premiumSearchUpsellContent'] = foxtra;
    foxtra = {'marginRight': 8, 'alignSelf': 'center'};
    golfie['nitroIcon'] = foxtra;
    golfie = yankee.bind(romeon)(golfie);
    var _closure1_slot14 = golfie;
    golfie = offset.memo;
    michal = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            yankee = argFoo;
            michal = _closure1_slot14;
            tangon = undefined;
            oscard = michal.bind(tangon)();
            michal = _closure1_slot16;
            golfie = michal.bind(tangon)(yankee);
            michal = _closure1_slot15;
            michal = michal.bind(tangon)(yankee);
            report = _closure1_slot13;
            zuuluu = _closure1_slot4;
            michal = {};
            option = oscard.premiumSearchUpsellContent;
            michal['style'] = option;
            foxtra = _closure1_slot12;
            backup = _closure1_slot1;
            verify = _closure1_slot2;
            romeon = 15;
            option = verify[romeon];
            offset = backup.bind(tangon)(option);
            option = {};
            kiloes = oscard.nitroIcon;
            option['style'] = kiloes;
            kiloes = 16;
            kiloes = verify[kiloes];
            kiloes = backup.bind(tangon)(kiloes);
            option['source'] = kiloes;
            kiloes = true;
            option['disableColor'] = kiloes;
            romeon = verify[romeon];
            romeon = backup.bind(tangon)(romeon);
            romeon = romeon.Sizes;
            romeon = romeon.MEDIUM;
            option['size'] = romeon;
            offset = foxtra.bind(tangon)(offset, option);
            option = new Array(2);
            option[0] = offset;
            offset = _closure1_slot0;
            romeon = 17;
            verify = verify[romeon];
            verify = offset.bind(tangon)(verify);
            offset = verify.Text;
            verify = {'lineClamp': 2, 'variant': 'text-sm/medium', 'color': 'interactive-active'};
            backup = yankee.useTier0UpsellContent;
            source = _closure1_slot0;
            ctrled = _closure1_slot2;
            sizing = 18;
            kiloes = ctrled[sizing];
            kiloes = source.bind(tangon)(kiloes);
            echoed = kiloes.intl;
            if(backup) { _fun00006_ip = 255; continue _fun00005 }
 221:
            kiloes = echoed.string;
            backup = ctrled[sizing];
            backup = source.bind(tangon)(backup);
            backup = backup.t;
            backup = backup.5t3lw8;
            backup = kiloes.bind(echoed)(backup);
            _fun00006_ip = 326; continue _fun00005;
 255:
            result = echoed.formatToPlainString;
            kiloes = ctrled[sizing];
            kiloes = source.bind(tangon)(kiloes);
            kiloes = kiloes.t;
            output = kiloes.kWBwlJ;
            kiloes = {};
            update = 9;
            update = ctrled[update];
            ctrled = source.bind(tangon)(update);
            source = ctrled.getTierDisplayName;
            update = _closure1_slot11;
            update = update.PREMIUM_MONTH_TIER_0;
            update = source.bind(ctrled)(update);
            kiloes['planName'] = update;
            backup = result.bind(echoed)(output, kiloes);
 326:
            verify['children'] = backup;
            verify = foxtra.bind(tangon)(offset, verify);
            option[1] = verify;
            michal['children'] = option;
            offset = report.bind(tangon)(zuuluu, michal);
            report = _closure1_slot13;
            verify = _closure1_slot0;
            option = _closure1_slot2;
            michal = 19;
            michal = option[michal];
            michal = verify.bind(tangon)(michal);
            zuuluu = michal.PressableOpacity;
            michal = {};
            foxtra = oscard.premiumSearchUpsell;
            michal['style'] = foxtra;
            foxtra = 'button';
            michal['accessibilityRole'] = foxtra;
            michal['onPress'] = golfie;
            golfie = new Array(2);
            golfie[0] = offset;
            offset = _closure1_slot12;
            option = option[romeon];
            option = verify.bind(tangon)(option);
            verify = option.Text;
            option = {'variant': 'text-sm/medium', 'color': 'text-link'};
            yankee = yankee.useTier0UpsellContent;
            kiloes = _closure1_slot0;
            romeon = _closure1_slot2;
            foxtra = romeon[sizing];
            foxtra = kiloes.bind(tangon)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.string;
            romeon = romeon[sizing];
            romeon = kiloes.bind(tangon)(romeon);
            romeon = romeon.t;
            if(yankee) { _fun00006_ip = 507; continue _fun00005 }
 494:
            yankee = romeon.pj0XBA;
            yankee = foxtra.bind(backup)(yankee);
            _fun00006_ip = 518; continue _fun00005;
 507:
            romeon = romeon.9CM5v7;
            yankee = foxtra.bind(backup)(romeon);
 518:
            option['children'] = yankee;
            option = offset.bind(tangon)(verify, option);
            golfie[1] = option;
            michal['children'] = golfie;
            report = report.bind(tangon)(zuuluu, michal);
            zuuluu = _closure1_slot12;
            michal = _closure1_slot4;
            entity = {};
            oscard = oscard.container;
            entity['style'] = oscard;
            oscard = false;
            entity['collapsable'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = golfie.bind(offset)(michal);
    golfie = 20;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT'] = oscard;
    zuuluu['useEmojiPickerPremiumSearchUpsellViewed'] = report;
    zuuluu['useEmojiPickerPremiumSearchUpsellClick'] = tangon;
    zuuluu['PremiumSearchUpsell'] = michal;
    return entity;
})();
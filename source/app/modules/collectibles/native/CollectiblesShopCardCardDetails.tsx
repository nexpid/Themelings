// app/modules/collectibles/native/CollectiblesShopCardCardDetails.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    kiloes = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = kiloes;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.StyleSheet;
    var _closure1_slot3 = option;
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = kiloes.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot6 = tangon;
    yankee = 4;
    tangon = oscard[yankee];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot7 = option;
    tangon = tangon.jsxs;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'position': 'absolute', 'height': null, 'width': '100%', 'padding': 10, 'flex': 1, 'bottom': 0, 'overflow': 'hidden'};
    romeon = 6;
    foxtra = oscard[romeon];
    foxtra = report.bind(entity)(foxtra);
    backup = foxtra.COLLECTIBLES_SHOP_CARD_HEIGHT;
    foxtra = 142;
    backup = backup - foxtra;
    offset['height'] = backup;
    tangon['regularMetadataContainer'] = offset;
    offset = {};
    backup = 7;
    sizing = oscard[backup];
    sizing = kiloes.bind(entity)(sizing);
    sizing = sizing.unsafe_rawColors;
    sizing = sizing.PRIMARY_660;
    offset['backgroundColor'] = sizing;
    tangon['metadataContainerDarkBackground'] = offset;
    offset = {};
    sizing = oscard[backup];
    sizing = kiloes.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BACKGROUND_MOBILE_PRIMARY;
    offset['backgroundColor'] = sizing;
    tangon['metadataContainerLightBackground'] = offset;
    offset = {};
    offset['marginBottom'] = yankee;
    tangon['assetName'] = offset;
    offset = {};
    sizing = 'auto';
    offset['marginTop'] = sizing;
    tangon['ctaButtonContainer'] = offset;
    offset = {};
    sizing = oscard[backup];
    sizing = kiloes.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.sm;
    offset['borderBottomLeftRadius'] = sizing;
    backup = oscard[backup];
    backup = kiloes.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    offset['borderBottomRightRadius'] = backup;
    romeon = oscard[romeon];
    romeon = report.bind(entity)(romeon);
    romeon = romeon.COLLECTIBLES_SHOP_CARD_HEIGHT;
    romeon = romeon - foxtra;
    offset['height'] = romeon;
    tangon['blur'] = offset;
    offset = {'opacity': 0.5, 'display': 'flex', 'flexDirection': 'row'};
    tangon['priceDescription'] = offset;
    offset = {'display': 'flex', 'flexDirection': 'row'};
    tangon['bundleDescription'] = offset;
    offset = {};
    offset['marginRight'] = yankee;
    tangon['wheelIcon'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot9 = tangon;
    option = golfie.memo;
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            backup = entity.product;
            foxtra = entity.isPremiumUser;
            oscard = entity.styles;
            michal = backup.type;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 8;
            entity = tangon[entity];
            tangon = undefined;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.CollectiblesItemType;
            entity = entity.BUNDLE;
            if(!(michal !== entity)) { _fun00002_ip = 450; continue _fun00001 }
 70:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 12;
            entity = zuuluu[entity];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.extractPriceByPurchaseTypes;
            golfie = _closure1_slot6;
            if(foxtra) { _fun00002_ip = 111; continue _fun00001 }
 103:
            entity = golfie.MOBILE_PREMIUM_TIER_2;
            _fun00002_ip = 117; continue _fun00001;
 111:
            entity = golfie.MOBILE;
 117:
            michal = michal.bind(zuuluu)(backup, entity);
            entity = null;
            if(!(entity != michal)) { _fun00002_ip = 448; continue _fun00001 }
 132:
            zuuluu = michal.priceString;
            if(!(entity == zuuluu)) { _fun00002_ip = 188; continue _fun00001 }
 142:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 13;
            zuuluu = option[zuuluu];
            verify = golfie.bind(tangon)(zuuluu);
            option = verify.formatPrice;
            golfie = michal.amount;
            zuuluu = michal.currency;
            verify = option.bind(verify)(golfie, zuuluu);
            _fun00002_ip = 194; continue _fun00001;
 188:
            verify = michal.priceString;
 194:
            zuuluu = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 10;
            golfie = offset[michal];
            golfie = zuuluu.bind(tangon)(golfie);
            option = golfie.intl;
            golfie = option.formatToPlainString;
            michal = offset[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.t;
            if(foxtra) { _fun00002_ip = 264; continue _fun00001 }
 241:
            offset = michal.W3gIWF;
            zuuluu = {};
            zuuluu['price'] = verify;
            romeon = golfie.bind(option)(offset, zuuluu);
            _fun00002_ip = 285; continue _fun00001;
 264:
            zuuluu = michal.7yqdFR;
            michal = {};
            michal['price'] = verify;
            romeon = golfie.bind(option)(zuuluu, michal);
 285:
            golfie = _closure1_slot8;
            zuuluu = _closure1_slot4;
            michal = {};
            option = oscard.priceDescription;
            michal['style'] = option;
            verify = !foxtra;
            if(!verify) { _fun00002_ip = 371; continue _fun00001 }
 311:
            yankee = _closure1_slot7;
            offset = _closure1_slot0;
            kiloes = _closure1_slot2;
            option = 14;
            option = kiloes[option];
            option = offset.bind(tangon)(option);
            offset = option.NitroWheelIcon;
            option = {'size': 'sm', 'color': 'interactive-active'};
            kiloes = oscard.wheelIcon;
            option['style'] = kiloes;
            verify = yankee.bind(tangon)(offset, option);
 371:
            option = new Array(2);
            option[0] = verify;
            yankee = _closure1_slot7;
            offset = _closure1_slot0;
            kiloes = _closure1_slot2;
            verify = 9;
            verify = kiloes[verify];
            verify = offset.bind(tangon)(verify);
            offset = verify.Text;
            verify = {'variant': 'text-xs/normal', 'color': 'interactive-active', 'lineClamp': 1};
            verify['children'] = romeon;
            verify = yankee.bind(tangon)(offset, verify);
            option[1] = verify;
            michal['children'] = option;
            michal = golfie.bind(tangon)(zuuluu, michal);
            return michal;
 448:
            return entity;
 450:
            zuuluu = _closure1_slot7;
            michal = _closure1_slot4;
            entity = {};
            oscard = oscard.bundleDescription;
            entity['style'] = oscard;
            romeon = _closure1_slot0;
            kiloes = _closure1_slot2;
            report = 9;
            report = kiloes[report];
            report = romeon.bind(tangon)(report);
            oscard = report.Text;
            report = {'variant': 'text-xs/normal', 'color': 'text-positive', 'lineClamp': 1};
            golfie = 10;
            option = kiloes[golfie];
            option = romeon.bind(tangon)(option);
            offset = option.intl;
            verify = offset.formatToPlainString;
            golfie = kiloes[golfie];
            golfie = romeon.bind(tangon)(golfie);
            golfie = golfie.t;
            option = golfie.eWoUGx;
            golfie = {};
            yankee = 11;
            yankee = kiloes[yankee];
            romeon = romeon.bind(tangon)(yankee);
            yankee = romeon.getProductDiscount;
            yankee = yankee.bind(romeon)(backup, foxtra);
            backup = yankee.discountPercentage;
            yankee = global;
            yankee = yankee.HermesInternal;
            foxtra = yankee.concat;
            romeon = '';
            yankee = '%';
            yankee = foxtra.bind(romeon)(backup, yankee);
            golfie['percent'] = yankee;
            golfie = verify.bind(offset)(option, golfie);
            report['children'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    option = option.bind(golfie)(tangon);
    var _closure1_slot10 = option;
    tangon = 'PriceDescription';
    option['displayName'] = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            yankee = entity.product;
            entity = _closure1_slot9;
            tangon = undefined;
            offset = entity.bind(tangon)();
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            zuuluu = 15;
            zuuluu = entity[zuuluu];
            report = michal.bind(tangon)(zuuluu);
            zuuluu = report.useThemeContext;
            zuuluu = zuuluu.bind(report)();
            kiloes = zuuluu.theme;
            zuuluu = 16;
            zuuluu = entity[zuuluu];
            golfie = michal.bind(tangon)(zuuluu);
            oscard = golfie.useStateFromStores;
            zuuluu = _closure1_slot5;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 15;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.isThemeDark;
                entity = _closure1_slot5;
                entity = entity.theme;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = oscard.bind(golfie)(report, zuuluu);
            zuuluu = 17;
            zuuluu = entity[zuuluu];
            report = michal.bind(tangon)(zuuluu);
            zuuluu = report.useCurrentUser;
            zuuluu = zuuluu.bind(report)();
            golfie = 18;
            entity = entity[golfie];
            report = michal.bind(tangon)(entity);
            michal = report.hexToRgbaString;
            oscard = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[golfie];
            foxtra = oscard.bind(tangon)(entity);
            romeon = foxtra.hexWithOpacity;
            if(option) { _fun00004_ip = 192; continue _fun00003 }
 168:
            oscard = '#FFFFFF';
            entity = 0.4;
            entity = romeon.bind(foxtra)(oscard, entity);
            _fun00004_ip = 214; continue _fun00003;
 192:
            golfie = '#1E1F22';
            oscard = 0.7;
            entity = romeon.bind(foxtra)(golfie, oscard);
 214:
            backup = michal.bind(report)(entity);
            output = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 11;
            entity = golfie[entity];
            michal = output.bind(tangon)(entity);
            entity = michal.isPremiumCollectiblesProduct;
            oscard = entity.bind(michal)(yankee);
            michal = _closure1_slot1;
            entity = 19;
            entity = golfie[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.canUseCollectibles;
            foxtra = entity.bind(michal)(zuuluu);
            zuuluu = _closure1_slot8;
            michal = _closure1_slot4;
            entity = {};
            romeon = offset.regularMetadataContainer;
            report = new Array(2);
            report[0] = romeon;
            sizing = yankee.type;
            romeon = 8;
            golfie = golfie[romeon];
            golfie = output.bind(tangon)(golfie);
            golfie = golfie.CollectiblesItemType;
            golfie = golfie.PROFILE_EFFECT;
            if(!(sizing === golfie)) { _fun00004_ip = 338; continue _fun00003 }
 334:
            golfie = {};
            _fun00004_ip = 358; continue _fun00003;
 338:
            if(option) { _fun00004_ip = 349; continue _fun00003 }
 341:
            option = offset.metadataContainerLightBackground;
            _fun00004_ip = 355; continue _fun00003;
 349:
            option = offset.metadataContainerDarkBackground;
 355:
            golfie = option;
 358:
            report[1] = golfie;
            entity['style'] = report;
            golfie = yankee.type;
            option = _closure1_slot0;
            report = _closure1_slot2;
            report = report[romeon];
            report = option.bind(tangon)(report);
            report = report.CollectiblesItemType;
            report = report.PROFILE_EFFECT;
            golfie = golfie === report;
            if(!golfie) { _fun00004_ip = 496; continue _fun00003 }
 407:
            romeon = _closure1_slot7;
            option = _closure1_slot1;
            sizing = _closure1_slot2;
            report = 20;
            report = sizing[report];
            option = option.bind(tangon)(report);
            report = {};
            sizing = 0.7;
            report['blurAmount'] = sizing;
            sizing = _closure1_slot3;
            output = sizing.absoluteFill;
            sizing = new Array(2);
            sizing[0] = output;
            output = offset.blur;
            sizing[1] = output;
            report['style'] = sizing;
            report['blurTheme'] = kiloes;
            report['blurTintRgba'] = backup;
            golfie = romeon.bind(tangon)(option, report);
 496:
            report = new Array(4);
            report[0] = golfie;
            romeon = _closure1_slot7;
            option = _closure1_slot0;
            backup = _closure1_slot2;
            golfie = 9;
            golfie = backup[golfie];
            golfie = option.bind(tangon)(golfie);
            option = golfie.Text;
            golfie = {'style': null, 'variant': 'heading-sm/bold', 'color': 'header-primary', 'lineClamp': 1, 'accessibilityRole': 'header'};
            backup = offset.assetName;
            golfie['style'] = backup;
            backup = yankee.name;
            golfie['children'] = backup;
            golfie = romeon.bind(tangon)(option, golfie);
            report[1] = golfie;
            oscard = !oscard;
            if(!oscard) { _fun00004_ip = 615; continue _fun00003 }
 584:
            romeon = _closure1_slot7;
            option = _closure1_slot10;
            golfie = {};
            golfie['product'] = yankee;
            golfie['isPremiumUser'] = foxtra;
            golfie['styles'] = offset;
            oscard = romeon.bind(tangon)(option, golfie);
 615:
            report[2] = oscard;
            option = _closure1_slot7;
            golfie = _closure1_slot4;
            oscard = {};
            offset = offset.ctaButtonContainer;
            oscard['style'] = offset;
            offset = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 21;
            verify = romeon[verify];
            offset = offset.bind(tangon)(verify);
            verify = {};
            verify['product'] = yankee;
            yankee = true;
            verify['onMainScreen'] = yankee;
            verify = option.bind(tangon)(offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[3] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 22;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/native/CollectiblesShopCardCardDetails.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();
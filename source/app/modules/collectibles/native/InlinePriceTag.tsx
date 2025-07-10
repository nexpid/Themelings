// app/modules/collectibles/native/InlinePriceTag.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.Pressable;
    var _closure1_slot3 = option;
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticsSections;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsxs;
    var _closure1_slot7 = golfie;
    golfie = tangon.jsx;
    var _closure1_slot8 = golfie;
    tangon = tangon.Fragment;
    var _closure1_slot9 = tangon;
    tangon = 5;
    golfie = oscard[tangon];
    verify = report.bind(entity)(golfie);
    option = verify.createStyles;
    golfie = {};
    offset = {'flexDirection': 'row', 'alignItems': 'center'};
    golfie['priceTag'] = offset;
    offset = {'textDecorationLine': 'line-through', 'textDecorationStyle': 'solid', 'opacity': 0.7};
    golfie['strikedPrice'] = offset;
    offset = {};
    golfie['regularPrice'] = offset;
    offset = {'width': 20, 'height': 20, 'marginLeft': 8, 'marginRight': 4};
    golfie['nitroIcon'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center'};
    golfie['container'] = offset;
    offset = {};
    yankee = 'underline';
    offset['textDecorationLine'] = yankee;
    golfie['underline'] = offset;
    offset = {};
    yankee = -2;
    offset['marginBottom'] = yankee;
    golfie['subscribeNowPressable'] = offset;
    golfie = option.bind(verify)(golfie);
    var _closure1_slot10 = golfie;
    golfie = function(argFoo) { // Original name: PriceTag
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.priceFormatted;
            offset = entity.style;
            option = entity.color;
            tangon = undefined;
            if(!(option === tangon)) { _fun00002_ip = 31; continue _fun00001 }
 25:
            option = 'interactive-active';
 31:
            golfie = entity.icon;
            yankee = entity.variant;
            if(!(yankee === tangon)) { _fun00002_ip = 49; continue _fun00001 }
 45:
            yankee = 'text-md/medium';
 49:
            report = entity.accessibilityLabel;
            michal = _closure1_slot10;
            verify = michal.bind(tangon)();
            zuuluu = _closure1_slot7;
            michal = _closure1_slot0;
            romeon = _closure1_slot2;
            entity = 6;
            entity = romeon[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.Text;
            entity = {};
            entity['variant'] = yankee;
            yankee = verify.priceTag;
            verify = new Array(2);
            verify[0] = yankee;
            verify[1] = offset;
            entity['style'] = verify;
            entity['color'] = option;
            entity['accessibilityLabel'] = report;
            report = new Array(2);
            report[0] = golfie;
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot11 = golfie;
    golfie = oscard[tangon];
    verify = report.bind(entity)(golfie);
    option = verify.createStyles;
    golfie = function() {
        entity = {};
        michal = {};
        zuuluu = 6;
        michal['paddingLeft'] = zuuluu;
        entity['discount'] = michal;
        return entity;
    };
    golfie = option.bind(verify)(golfie);
    var _closure1_slot12 = golfie;
    golfie = function(argFoo) { // Original name: BundleDiscountV1
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golfie = entity.product;
            tangon = entity.eligibleForPremiumDiscount;
            entity = _closure1_slot12;
            report = undefined;
            oscard = entity.bind(report)();
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            entity = 16;
            entity = option[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.getProductDiscount;
            entity = entity.bind(zuuluu)(golfie, tangon);
            golfie = entity.discountPercentage;
            entity = 0;
            zuuluu = golfie <= entity;
            entity = null;
            if(zuuluu) { _fun00004_ip = 164; continue _fun00003 }
 77:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 6;
            michal = option[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.Text;
            michal = {'variant': 'text-md/normal', 'color': 'text-positive'};
            oscard = oscard.discount;
            michal['style'] = oscard;
            oscard = ['(-'];
            oscard[1] = golfie;
            golfie = '%)';
            oscard[2] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 164:
            return entity;
        }
    };
    var _closure1_slot13 = golfie;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = function() {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = {};
            michal = {'backgroundColor': 'rgba(46, 204, 113, 0.25)', 'flexDirection': 'row', 'flexShrink': 1, 'borderRadius': null, 'paddingHorizontal': 6, 'marginLeft': 4};
            golfie = 1;
            option = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 17;
            oscard = report[zuuluu];
            zuuluu = undefined;
            oscard = option.bind(zuuluu)(oscard);
            oscard = oscard.radii;
            oscard = oscard.xs;
            oscard = oscard - golfie;
            michal['borderRadius'] = oscard;
            golfie = _closure1_slot0;
            oscard = 18;
            report = report[oscard];
            golfie = golfie.bind(zuuluu)(report);
            report = golfie.isAndroid;
            golfie = report.bind(golfie)();
            report = undefined;
            if(!golfie) { _fun00006_ip = 97; continue _fun00005 }
 95:
            report = 0;
 97:
            michal['paddingTop'] = report;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[oscard];
            report = report.bind(zuuluu)(tangon);
            tangon = report.isAndroid;
            tangon = tangon.bind(report)();
            zuuluu = undefined;
            if(!tangon) { _fun00006_ip = 136; continue _fun00005 }
 133:
            zuuluu = 2;
 136:
            michal['paddingBottom'] = zuuluu;
            entity['discount'] = michal;
            return entity;
        }
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot14 = tangon;
    tangon = function(argFoo) { // Original name: BundleDiscountV2
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            tangon = entity.product;
            zuuluu = entity.eligibleForPremiumDiscount;
            entity = _closure1_slot14;
            report = undefined;
            golfie = entity.bind(report)();
            michal = _closure1_slot0;
            option = _closure1_slot2;
            entity = 16;
            entity = option[entity];
            michal = michal.bind(report)(entity);
            entity = michal.getProductDiscount;
            entity = entity.bind(michal)(tangon, zuuluu);
            offset = entity.discountPercentage;
            entity = 0;
            michal = offset <= entity;
            entity = null;
            if(michal) { _fun00008_ip = 182; continue _fun00007 }
 77:
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot4;
            michal = {};
            golfie = golfie.discount;
            michal['style'] = golfie;
            option = _closure1_slot7;
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            oscard = 6;
            oscard = verify[oscard];
            oscard = golfie.bind(report)(oscard);
            golfie = oscard.Text;
            oscard = {'variant': 'text-md/normal', 'color': 'text-positive'};
            verify = ['-'];
            verify[1] = offset;
            offset = '%';
            verify[2] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 182:
            return entity;
        }
    };
    var _closure1_slot15 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/native/InlinePriceTag.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: InlinePriceTag
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            result = entity.product;
            michal = _closure1_slot10;
            tangon = undefined;
            kiloes = michal.bind(tangon)();
            var _closure2_slot0 = kiloes;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 7;
            michal = report[michal];
            oscard = zuuluu.bind(tangon)(michal);
            michal = oscard.useCurrentUser;
            option = michal.bind(oscard)();
            oscard = _closure1_slot1;
            michal = 8;
            michal = report[michal];
            golfie = oscard.bind(tangon)(michal);
            michal = golfie.canUseCollectibles;
            output = michal.bind(golfie)(option);
            michal = 9;
            michal = report[michal];
            oscard = oscard.bind(tangon)(michal);
            michal = _closure1_slot6;
            michal = michal.SHOP_PRODUCT_DETAILS;
            source = oscard.bind(tangon)(michal);
            golfie = 10;
            michal = report[golfie];
            verify = zuuluu.bind(tangon)(michal);
            option = verify.getFormattedPriceForCollectiblesProduct;
            michal = false;
            oscard = true;
            echoed = option.bind(verify)(result, michal, oscard);
            michal = 11;
            michal = report[michal];
            option = zuuluu.bind(tangon)(michal);
            report = option.useStateFromStores;
            michal = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot5;
                entity = michal.isFetchingGoogleSkus;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = report.bind(option)(zuuluu, michal);
            if(!michal) { _fun00010_ip = 195; continue _fun00009 }
 186:
            michal = null;
            if(!(michal != echoed)) { _fun00010_ip = 944; continue _fun00009 }
 195:
            michal = null;
            if(!(michal != echoed)) { _fun00010_ip = 942; continue _fun00009 }
 204:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.getFormattedPriceForCollectiblesProduct;
            update = zuuluu.bind(report)(result, oscard, oscard);
            oscard = _closure1_slot7;
            report = _closure1_slot4;
            zuuluu = {};
            golfie = kiloes.container;
            zuuluu['style'] = golfie;
            yankee = _closure1_slot8;
            offset = _closure1_slot11;
            golfie = {};
            golfie['priceFormatted'] = echoed;
            option = 'heading-md/semibold';
            if(!output) { _fun00010_ip = 279; continue _fun00009 }
 277:
            option = undefined;
 279:
            golfie['variant'] = option;
            if(output) { _fun00010_ip = 294; continue _fun00009 }
 286:
            option = kiloes.regularPrice;
            _fun00010_ip = 300; continue _fun00009;
 294:
            option = kiloes.strikedPrice;
 300:
            golfie['style'] = option;
            ctrled = 'interactive-active';
            golfie['color'] = ctrled;
            verify = _closure1_slot0;
            option = _closure1_slot2;
            cntext = 13;
            romeon = option[cntext];
            romeon = verify.bind(tangon)(romeon);
            sizing = romeon.intl;
            backup = sizing.formatToPlainString;
            romeon = option[cntext];
            romeon = verify.bind(tangon)(romeon);
            romeon = romeon.t;
            foxtra = romeon.sPvyr6;
            romeon = {};
            romeon['price'] = echoed;
            romeon = backup.bind(sizing)(foxtra, romeon);
            golfie['accessibilityLabel'] = romeon;
            offset = yankee.bind(tangon)(offset, golfie);
            golfie = new Array(3);
            golfie[0] = offset;
            offset = result.type;
            sizing = 14;
            option = option[sizing];
            option = verify.bind(tangon)(option);
            option = option.CollectiblesItemType;
            verify = option.BUNDLE;
            option = null;
            if(!(offset === verify)) { _fun00010_ip = 463; continue _fun00009 }
 432:
            option = null;
            if(output) { _fun00010_ip = 463; continue _fun00009 }
 437:
            yankee = _closure1_slot8;
            offset = _closure1_slot15;
            verify = {};
            verify['product'] = result;
            verify['eligibleForPremiumDiscount'] = output;
            option = yankee.bind(tangon)(offset, verify);
 463:
            golfie[1] = option;
            option = michal != update;
            if(!option) { _fun00010_ip = 926; continue _fun00009 }
 477:
            yankee = _closure1_slot7;
            offset = _closure1_slot9;
            verify = {};
            backup = _closure1_slot8;
            foxtra = _closure1_slot0;
            echoed = _closure1_slot2;
            romeon = 15;
            romeon = echoed[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            foxtra = romeon.NitroWheelIcon;
            romeon = {};
            echoed = 'interactive-normal';
            if(!output) { _fun00010_ip = 531; continue _fun00009 }
 528:
            echoed = ctrled;
 531:
            romeon['color'] = echoed;
            echoed = kiloes.nitroIcon;
            romeon['style'] = echoed;
            foxtra = backup.bind(tangon)(foxtra, romeon);
            romeon = new Array(4);
            romeon[0] = foxtra;
            echoed = _closure1_slot8;
            if(output) { _fun00010_ip = 718; continue _fun00009 }
 569:
            backup = _closure1_slot3;
            foxtra = {};
            foxtra['onPress'] = source;
            kiloes = kiloes.subscribeNowPressable;
            foxtra['style'] = kiloes;
            vacuum = _closure1_slot0;
            ctrled = _closure1_slot2;
            kiloes = 6;
            kiloes = ctrled[kiloes];
            kiloes = vacuum.bind(tangon)(kiloes);
            source = kiloes.Text;
            kiloes = {'variant': 'text-md/normal', 'color': 'interactive-normal'};
            sequen = ctrled[cntext];
            sequen = vacuum.bind(tangon)(sequen);
            config = sequen.intl;
            sequen = config.format;
            ctrled = ctrled[cntext];
            ctrled = vacuum.bind(tangon)(ctrled);
            ctrled = ctrled.t;
            vacuum = ctrled.Kxw2LS;
            ctrled = {};
            ctrled['price'] = update;
            record = function(argFoo) { // Original name: subscribeNowHook
                tangon = _closure1_slot8;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 6;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.Text;
                entity = {};
                report = 'text-md/normal';
                entity['variant'] = report;
                report = _closure2_slot0;
                report = report.underline;
                entity['style'] = report;
                report = argFoo;
                entity['children'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            ctrled['subscribeNowHook'] = record;
            ctrled = sequen.bind(config)(vacuum, ctrled);
            kiloes['children'] = ctrled;
            kiloes = echoed.bind(tangon)(source, kiloes);
            foxtra['children'] = kiloes;
            foxtra = echoed.bind(tangon)(backup, foxtra);
            _fun00010_ip = 767; continue _fun00009;
 718:
            kiloes = _closure1_slot0;
            source = _closure1_slot2;
            backup = 6;
            backup = source[backup];
            backup = kiloes.bind(tangon)(backup);
            kiloes = backup.Text;
            backup = {'variant': 'text-md/medium', 'color': 'interactive-active'};
            backup['children'] = update;
            foxtra = echoed.bind(tangon)(kiloes, backup);
 767:
            romeon[1] = foxtra;
            kiloes = result.type;
            backup = _closure1_slot0;
            foxtra = _closure1_slot2;
            foxtra = foxtra[sizing];
            foxtra = backup.bind(tangon)(foxtra);
            foxtra = foxtra.CollectiblesItemType;
            backup = foxtra.BUNDLE;
            foxtra = null;
            if(!(kiloes === backup)) { _fun00010_ip = 837; continue _fun00009 }
 811:
            echoed = _closure1_slot8;
            kiloes = _closure1_slot13;
            backup = {};
            backup['product'] = result;
            backup['eligibleForPremiumDiscount'] = output;
            foxtra = echoed.bind(tangon)(kiloes, backup);
 837:
            romeon[2] = foxtra;
            kiloes = result.type;
            backup = _closure1_slot0;
            foxtra = _closure1_slot2;
            foxtra = foxtra[sizing];
            foxtra = backup.bind(tangon)(foxtra);
            foxtra = foxtra.CollectiblesItemType;
            backup = foxtra.BUNDLE;
            foxtra = null;
            if(!(kiloes === backup)) { _fun00010_ip = 912; continue _fun00009 }
 881:
            foxtra = null;
            if(!output) { _fun00010_ip = 912; continue _fun00009 }
 886:
            sizing = _closure1_slot8;
            kiloes = _closure1_slot15;
            backup = {};
            backup['product'] = result;
            backup['eligibleForPremiumDiscount'] = output;
            foxtra = sizing.bind(tangon)(kiloes, backup);
 912:
            romeon[3] = foxtra;
            verify['children'] = romeon;
            option = yankee.bind(tangon)(offset, verify);
 926:
            golfie[2] = option;
            zuuluu['children'] = golfie;
            zuuluu = oscard.bind(tangon)(report, zuuluu);
            return zuuluu;
 942:
            return michal;
 944:
            zuuluu = _closure1_slot8;
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 12;
            entity = report[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.CollectiblesShopPricePlaceholder;
            entity = {};
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();
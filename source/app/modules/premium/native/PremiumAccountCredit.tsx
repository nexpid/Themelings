// app/modules/premium/native/PremiumAccountCredit.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: AccountCreditTier
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            update = entity.planId;
            foxtra = entity.months;
            echoed = entity.currentSubscription;
            option = entity.shouldAddDivider;
            report = entity.unconsumedFractionalPremiumUnits;
            entity = _closure1_slot8;
            tangon = undefined;
            yankee = entity.bind(tangon)();
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 7;
            michal = entity[oscard];
            offset = zuuluu.bind(tangon)(michal);
            verify = offset.castPremiumSubscriptionAsSkuId;
            michal = _closure1_slot1;
            zuuluu = entity[oscard];
            romeon = michal.bind(tangon)(zuuluu);
            zuuluu = romeon.getSkuIdForPlan;
            zuuluu = zuuluu.bind(romeon)(update);
            verify = verify.bind(offset)(zuuluu);
            entity = entity[oscard];
            michal = michal.bind(tangon)(entity);
            entity = michal.getDisplayPremiumType;
            vacuum = entity.bind(michal)(update);
            sequen = null;
            entity = sequen != echoed;
            config = undefined;
            if(!entity) { _fun00002_ip = 263; continue _fun00001 }
 135:
            michal = echoed.status;
            entity = _closure1_slot5;
            entity = entity.PAUSED;
            if(!(michal === entity)) { _fun00002_ip = 164; continue _fun00001 }
 154:
            entity = echoed.pauseEndsAt;
            if(!(sequen == entity)) { _fun00002_ip = 200; continue _fun00001 }
 164:
            entity = global;
            zuuluu = entity.Date;
            papara = echoed.currentPeriodEnd;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            target = michal;
            entity = new target[zuuluu](papara, cntext);
            zuuluu = entity instanceof Object ? entity : michal;
            _fun00002_ip = 234; continue _fun00001;
 200:
            entity = global;
            offset = entity.Date;
            papara = echoed.pauseEndsAt;
            michal = offset.prototype;
            michal = Object.create(michal, {constructor: {value: offset}});
            target = michal;
            entity = new target[offset](papara, cntext);
            zuuluu = entity instanceof Object ? entity : michal;
 234:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[oscard];
            michal = michal.bind(tangon)(entity);
            entity = michal.extendDateWithUnconsumedFractionalPremium;
            config = entity.bind(michal)(zuuluu, report);
 263:
            zuuluu = _closure1_slot7;
            michal = _closure1_slot3;
            entity = {};
            oscard = yankee.creditItem;
            report = new Array(2);
            report[0] = oscard;
            oscard = null;
            if(!option) { _fun00002_ip = 298; continue _fun00001 }
 292:
            oscard = yankee.divider;
 298:
            report[1] = oscard;
            entity['style'] = report;
            option = _closure1_slot6;
            romeon = _closure1_slot1;
            output = _closure1_slot2;
            offset = 8;
            report = output[offset];
            oscard = romeon.bind(tangon)(report);
            report = {};
            offset = output[offset];
            offset = romeon.bind(tangon)(offset);
            offset = offset.Sizes;
            offset = offset.SMALL;
            report['size'] = offset;
            report['skuId'] = verify;
            oscard = option.bind(tangon)(oscard, report);
            report = new Array(3);
            report[0] = oscard;
            offset = _closure1_slot7;
            verify = _closure1_slot3;
            option = {};
            oscard = yankee.textContainer;
            option['style'] = oscard;
            sizing = _closure1_slot6;
            result = _closure1_slot0;
            oscard = 9;
            romeon = output[oscard];
            romeon = result.bind(tangon)(romeon);
            kiloes = romeon.Text;
            romeon = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            backup = yankee.headerText;
            romeon['style'] = backup;
            backup = 10;
            source = output[backup];
            source = result.bind(tangon)(source);
            ctrled = source.intl;
            source = ctrled.format;
            output = output[backup];
            output = result.bind(tangon)(output);
            output = output.t;
            result = output.LzobT0;
            output = {};
            output['planName'] = vacuum;
            output = source.bind(ctrled)(result, output);
            romeon['children'] = output;
            kiloes = sizing.bind(tangon)(kiloes, romeon);
            romeon = new Array(2);
            romeon[0] = kiloes;
            if(!(sequen != echoed)) { _fun00002_ip = 540; continue _fun00001 }
 526:
            sizing = echoed.isPurchasedExternally;
            kiloes = null;
            if(sizing) { _fun00002_ip = 754; continue _fun00001 }
 540:
            result = _closure1_slot6;
            output = _closure1_slot0;
            sizing = _closure1_slot2;
            sizing = sizing[oscard];
            sizing = output.bind(tangon)(sizing);
            output = sizing.Text;
            sizing = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
            source = yankee.subText;
            sizing['style'] = source;
            if(!(sequen != echoed)) { _fun00002_ip = 606; continue _fun00001 }
 596:
            echoed = echoed.planId;
            if(!(echoed !== update)) { _fun00002_ip = 670; continue _fun00001 }
 606:
            update = _closure1_slot0;
            echoed = _closure1_slot2;
            source = echoed[backup];
            source = update.bind(tangon)(source);
            ctrled = source.intl;
            source = ctrled.formatToPlainString;
            echoed = echoed[backup];
            echoed = update.bind(tangon)(echoed);
            echoed = echoed.t;
            update = echoed.eNXZ5O;
            echoed = {};
            echoed['planName'] = vacuum;
            echoed = source.bind(ctrled)(update, echoed);
            _fun00002_ip = 744; continue _fun00001;
 670:
            source = _closure1_slot0;
            update = _closure1_slot2;
            ctrled = update[backup];
            ctrled = source.bind(tangon)(ctrled);
            vacuum = ctrled.intl;
            ctrled = vacuum.formatToPlainString;
            update = update[backup];
            update = source.bind(tangon)(update);
            update = update.t;
            source = update.5CNRRE;
            update = {};
            record = sequen != config;
            sequen = 0;
            if(!record) { _fun00002_ip = 733; continue _fun00001 }
 730:
            sequen = config;
 733:
            update['date'] = sequen;
            echoed = ctrled.bind(vacuum)(source, update);
 744:
            sizing['children'] = echoed;
            kiloes = result.bind(tangon)(output, sizing);
 754:
            romeon[1] = kiloes;
            option['children'] = romeon;
            option = offset.bind(tangon)(verify, option);
            report[1] = option;
            option = _closure1_slot6;
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            oscard = verify[oscard];
            oscard = offset.bind(tangon)(oscard);
            golfie = oscard.Text;
            oscard = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            yankee = yankee.timeText;
            oscard['style'] = yankee;
            yankee = verify[backup];
            yankee = offset.bind(tangon)(yankee);
            romeon = yankee.intl;
            yankee = romeon.format;
            verify = verify[backup];
            verify = offset.bind(tangon)(verify);
            verify = verify.t;
            offset = verify.ess/xs;
            verify = {};
            verify['count'] = foxtra;
            verify = yankee.bind(romeon)(offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    tangon = tangon.bind(entity)(golfie);
    romeon = 1;
    tangon = oscard[romeon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SubscriptionStatusTypes;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot6 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = 12;
    verify['marginBottom'] = offset;
    tangon['title'] = verify;
    verify = {};
    offset = 6;
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.xs;
    verify['borderRadius'] = foxtra;
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = foxtra;
    tangon['creditList'] = verify;
    foxtra = 16;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'padding': 16};
    tangon['creditItem'] = verify;
    verify = {'marginLeft': 16, 'marginRight': 16, 'flexDirection': 'column', 'flex': 1};
    tangon['textContainer'] = verify;
    verify = {};
    backup = 20;
    verify['lineHeight'] = backup;
    tangon['headerText'] = verify;
    verify = {};
    verify['lineHeight'] = foxtra;
    tangon['subText'] = verify;
    verify = {'lineHeight': 20, 'alignSelf': 'flex-start'};
    tangon['timeText'] = verify;
    verify = {};
    verify['borderBottomWidth'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_MODIFIER_ACCENT;
    verify['borderBottomColor'] = offset;
    tangon['divider'] = verify;
    verify = {};
    offset = 8;
    verify['marginTop'] = offset;
    tangon['creditDescription'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/native/PremiumAccountCredit.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            offset = entity.currentSubscription;
            var _closure2_slot0 = offset;
            golfie = entity.entitlements;
            oscard = entity.style;
            source = entity.creditListContainerStyle;
            report = undefined;
            var _closure2_slot2 = report;
            entity = _closure1_slot8;
            foxtra = entity.bind(report)();
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 11;
            entity = zuuluu[entity];
            tangon = michal.bind(report)(entity);
            zuuluu = tangon.useStateFromStoresArray;
            entity = _closure1_slot4;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                michal = _closure1_slot4;
                entity = michal.getUnactivatedFractionalPremiumUnits;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            var _closure2_slot1 = entity;
            entity = null;
            if(!(entity != golfie)) { _fun00004_ip = 683; continue _fun00003 }
 113:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 7;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.hasAccountCredit;
            michal = michal.bind(zuuluu)(golfie);
            if(!michal) { _fun00004_ip = 683; continue _fun00003 }
 150:
            zuuluu = _closure1_slot1;
            sizing = _closure1_slot2;
            michal = 12;
            michal = sizing[michal];
            zuuluu = zuuluu.bind(report)(michal);
            output = global;
            tangon = output.Array;
            michal = tangon.from;
            michal = michal.bind(tangon)(golfie);
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    entity = michal.subscriptionPlanId;
                    tangon = michal.parentId;
                    michal = michal.consumed;
                    zuuluu = null;
                    entity = zuuluu != entity;
                    if(!entity) { _fun00006_ip = 34; continue _fun00005 }
 30:
                    entity = zuuluu != tangon;
 34:
                    if(!entity) { _fun00006_ip = 40; continue _fun00005 }
 37:
                    entity = !michal;
 40:
                    return entity;
                }
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.groupBy;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.subscriptionPlanId;
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.value;
            update = michal.bind(zuuluu)();
            _closure2_slot2 = update;
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot3;
            michal = {};
            michal['style'] = oscard;
            yankee = _closure1_slot6;
            echoed = _closure1_slot0;
            option = 9;
            oscard = sizing[option];
            oscard = echoed.bind(report)(oscard);
            golfie = oscard.Text;
            oscard = {'style': null, 'accessibilityRole': 'header', 'variant': 'eyebrow', 'color': 'header-secondary'};
            romeon = foxtra.title;
            oscard['style'] = romeon;
            kiloes = 10;
            romeon = sizing[kiloes];
            romeon = echoed.bind(report)(romeon);
            ctrled = romeon.intl;
            result = ctrled.string;
            romeon = sizing[kiloes];
            romeon = echoed.bind(report)(romeon);
            romeon = romeon.t;
            romeon = romeon.YugZY2;
            romeon = result.bind(ctrled)(romeon);
            oscard['children'] = romeon;
            golfie = yankee.bind(report)(golfie, oscard);
            oscard = new Array(4);
            oscard[0] = golfie;
            romeon = _closure1_slot6;
            yankee = _closure1_slot3;
            golfie = {};
            ctrled = foxtra.creditList;
            result = new Array(2);
            result[0] = ctrled;
            result[1] = source;
            golfie['style'] = result;
            result = output.Object;
            output = result.keys;
            result = output.bind(result)(update);
            output = result.map;
            backup = function(argFoo) {
                report = argFoo;
                michal = global;
                oscard = michal.Object;
                tangon = oscard.keys;
                zuuluu = _closure2_slot2;
                zuuluu = tangon.bind(oscard)(zuuluu);
                oscard = michal.Object;
                tangon = oscard.keys;
                michal = _closure2_slot2;
                michal = tangon.bind(oscard)(michal);
                tangon = michal.length;
                michal = 1;
                michal = tangon - michal;
                oscard = zuuluu[michal];
                tangon = _closure1_slot6;
                zuuluu = _closure1_slot9;
                michal = {};
                michal['planId'] = report;
                golfie = _closure2_slot2;
                golfie = golfie[report];
                golfie = golfie.length;
                michal['months'] = golfie;
                golfie = _closure2_slot0;
                michal['currentSubscription'] = golfie;
                oscard = report === oscard;
                oscard = !oscard;
                michal['shouldAddDivider'] = oscard;
                entity = _closure2_slot1;
                michal['unconsumedFractionalPremiumUnits'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal, report);
                return entity;
            };
            backup = output.bind(result)(backup);
            golfie['children'] = backup;
            golfie = romeon.bind(report)(yankee, golfie);
            oscard[1] = golfie;
            backup = _closure1_slot6;
            golfie = sizing[option];
            golfie = echoed.bind(report)(golfie);
            yankee = golfie.Text;
            golfie = {};
            romeon = foxtra.creditDescription;
            golfie['style'] = romeon;
            romeon = 'text-sm/medium';
            golfie['variant'] = romeon;
            output = sizing[kiloes];
            output = echoed.bind(report)(output);
            result = output.intl;
            output = result.string;
            sizing = sizing[kiloes];
            sizing = echoed.bind(report)(sizing);
            sizing = sizing.t;
            sizing = sizing.kNEjGh;
            sizing = output.bind(result)(sizing);
            golfie['children'] = sizing;
            golfie = backup.bind(report)(yankee, golfie);
            oscard[2] = golfie;
            yankee = entity != offset;
            golfie = null;
            if(!yankee) { _fun00004_ip = 667; continue _fun00003 }
 558:
            offset = offset.isPurchasedExternally;
            golfie = null;
            if(!offset) { _fun00004_ip = 667; continue _fun00003 }
 569:
            offset = _closure1_slot6;
            backup = _closure1_slot0;
            yankee = _closure1_slot2;
            option = yankee[option];
            option = backup.bind(report)(option);
            verify = option.Text;
            option = {};
            foxtra = foxtra.creditDescription;
            option['style'] = foxtra;
            option['variant'] = romeon;
            romeon = yankee[kiloes];
            romeon = backup.bind(report)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            yankee = yankee[kiloes];
            yankee = backup.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.azRP0N;
            yankee = romeon.bind(foxtra)(yankee);
            option['children'] = yankee;
            golfie = offset.bind(report)(verify, option);
 667:
            oscard[3] = golfie;
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 683:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();
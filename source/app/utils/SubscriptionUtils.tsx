// app/utils/SubscriptionUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot11;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot11;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    report = function(argFoo) { // Original name: getSubscriptionPlans
        entity = argFoo;
        zuuluu = entity.items;
        michal = zuuluu.map;
        entity = function(argFoo) {
            tangon = _closure1_slot5;
            zuuluu = tangon.get;
            entity = argFoo;
            entity = entity.planId;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 5;
            michal = tangon[michal];
            report = undefined;
            tangon = zuuluu.bind(report)(michal);
            michal = null;
            zuuluu = michal != entity;
            michal = 'Unable to fetch plan';
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot12 = report;
    tangon = function(argFoo, argBar, argBaz) { // Original name: subscriptionCanSwitchImmediately
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = argBar;
            tangon = argBaz;
            michal = entity.getCurrentSubscriptionPlanIdForGroup;
            zuuluu = michal.bind(entity)(tangon);
            michal = entity.type;
            entity = _closure1_slot7;
            entity = entity.PREMIUM;
            entity = michal === entity;
            if(!entity) { _fun00008_ip = 51; continue _fun00007 }
 45:
            michal = null;
            entity = michal == zuuluu;
 51:
            if(entity) { _fun00008_ip = 175; continue _fun00007 }
 54:
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 5;
            offset = verify[michal];
            option = undefined;
            romeon = golfie.bind(option)(offset);
            offset = null;
            yankee = offset != zuuluu;
            offset = 'Current subscription has no plan in group';
            offset = romeon.bind(option)(yankee, offset);
            michal = verify[michal];
            golfie = golfie.bind(option)(michal);
            michal = _closure1_slot8;
            michal = michal.PREMIUM_YEAR_TIER_1;
            michal = zuuluu === michal;
            if(!michal) { _fun00008_ip = 134; continue _fun00007 }
 120:
            oscard = _closure1_slot8;
            oscard = oscard.PREMIUM_MONTH_TIER_2;
            michal = report === oscard;
 134:
            oscard = !michal;
            michal = 'Unexpected plan switch';
            michal = golfie.bind(option)(oscard, michal);
            michal = tangon.indexOf;
            zuuluu = michal.bind(tangon)(zuuluu);
            michal = tangon.indexOf;
            michal = michal.bind(tangon)(report);
            entity = zuuluu < michal;
 175:
            return entity;
        }
    };
    var _closure1_slot13 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    offset = option[oscard];
    oscard = argCor;
    oscard = oscard.bind(entity)(offset);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.SubscriptionStatusTypes;
    var _closure1_slot6 = verify;
    oscard = oscard.SubscriptionTypes;
    var _closure1_slot7 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.SubscriptionPlans;
    var _closure1_slot8 = verify;
    oscard = oscard.SubscriptionPlanInfo;
    var _closure1_slot9 = oscard;
    oscard = 11;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'utils/SubscriptionUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['getSubscriptionPlans'] = report;
    report = function(argFoo) { // Original name: getSubscriptionSKUs
        zuuluu = _closure1_slot12;
        michal = undefined;
        entity = argFoo;
        zuuluu = zuuluu.bind(michal)(entity);
        michal = zuuluu.map;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.skuId;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getSubscriptionSKUs'] = report;
    zuuluu['subscriptionCanSwitchImmediately'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: subscriptionCanDowngrade
        report = _closure1_slot13;
        tangon = undefined;
        zuuluu = argFoo;
        michal = argBar;
        entity = argBaz;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        entity = !entity;
        return entity;
    };
    zuuluu['subscriptionCanDowngrade'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getOrFetchSubscriptionPlan
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            offset = argFoo;
            zuuluu = _closure1_slot5;
            entity = zuuluu.get;
            entity = entity.bind(zuuluu)(offset);
            report = null;
            if(!(report == entity)) { _fun00010_ip = 179; continue _fun00009 }
 29:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu[offset];
            option = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 5;
            oscard = golfie[tangon];
            tangon = undefined;
            option = option.bind(tangon)(oscard);
            oscard = report != zuuluu;
            report = global;
            report = report.HermesInternal;
            verify = report.concat;
            report = 'Missing hardcoded subscriptionPlan: ';
            report = verify.bind(report)(offset);
            report = option.bind(tangon)(oscard, report);
            oscard = _closure1_slot0;
            report = 6;
            report = golfie[report];
            oscard = oscard.bind(tangon)(report);
            report = oscard.castPremiumSubscriptionAsSkuId;
            zuuluu = zuuluu.skuId;
            report = report.bind(oscard)(zuuluu);
            oscard = _closure1_slot5;
            zuuluu = oscard.isFetchingForSKU;
            zuuluu = zuuluu.bind(oscard)(report);
            if(zuuluu) { _fun00010_ip = 179; continue _fun00009 }
 144:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 7;
            michal = oscard[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.fetchSubscriptionPlansForSKU;
            michal = argBar;
            michal = zuuluu.bind(tangon)(report, michal);
 179:
            return entity;
        }
    };
    zuuluu['getOrFetchSubscriptionPlan'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useGetOrFetchSubscriptionPlan
        option = argFoo;
        golfie = argBar;
        var _closure2_slot0 = option;
        var _closure2_slot1 = golfie;
        tangon = _closure1_slot0;
        report = _closure1_slot2;
        entity = 8;
        entity = report[entity];
        oscard = undefined;
        verify = tangon.bind(oscard)(entity);
        report = verify.useStateFromStoresArray;
        entity = _closure1_slot5;
        tangon = new Array(1);
        tangon[0] = entity;
        entity = function() {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = _closure2_slot0;
                michal = null;
                tangon = michal != zuuluu;
                zuuluu = null;
                if(!tangon) { _fun00012_ip = 39; continue _fun00011 }
 18:
                report = _closure1_slot5;
                tangon = report.get;
                entity = _closure2_slot0;
                zuuluu = tangon.bind(report)(entity);
 39:
                entity = new Array(2);
                entity[0] = zuuluu;
                michal = michal != zuuluu;
                if(!michal) { _fun00012_ip = 78; continue _fun00011 }
 54:
                report = _closure1_slot5;
                tangon = report.isFetchingForSKU;
                zuuluu = zuuluu.skuId;
                michal = tangon.bind(report)(zuuluu);
 78:
                entity[1] = michal;
                return entity;
            }
        };
        report = report.bind(verify)(tangon, entity);
        tangon = _closure1_slot3;
        entity = 2;
        report = tangon.bind(oscard)(report, entity);
        entity = 0;
        entity = report[entity];
        var _closure2_slot2 = entity;
        tangon = 1;
        oscard = report[tangon];
        var _closure2_slot3 = oscard;
        report = _closure1_slot4;
        tangon = report.useEffect;
        zuuluu = new Array(4);
        zuuluu[0] = entity;
        zuuluu[1] = option;
        zuuluu[2] = golfie;
        zuuluu[3] = oscard;
        michal = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = _closure2_slot2;
                tangon = null;
                if(!(tangon == michal)) { _fun00014_ip = 169; continue _fun00013 }
 16:
                michal = _closure2_slot0;
                if(!(tangon != michal)) { _fun00014_ip = 169; continue _fun00013 }
 27:
                michal = _closure2_slot3;
                if(michal) { _fun00014_ip = 169; continue _fun00013 }
 37:
                michal = _closure1_slot9;
                offset = _closure2_slot0;
                michal = michal[offset];
                oscard = _closure1_slot1;
                option = _closure1_slot2;
                report = 5;
                report = option[report];
                golfie = undefined;
                oscard = oscard.bind(golfie)(report);
                report = tangon != michal;
                tangon = global;
                tangon = tangon.HermesInternal;
                verify = tangon.concat;
                tangon = 'Missing hardcoded subscriptionPlan: ';
                tangon = verify.bind(tangon)(offset);
                tangon = oscard.bind(golfie)(report, tangon);
                oscard = _closure1_slot0;
                zuuluu = 7;
                zuuluu = option[zuuluu];
                tangon = oscard.bind(golfie)(zuuluu);
                zuuluu = tangon.fetchSubscriptionPlansForSKU;
                report = 6;
                report = option[report];
                oscard = oscard.bind(golfie)(report);
                report = oscard.castPremiumSubscriptionAsSkuId;
                michal = michal.skuId;
                michal = report.bind(oscard)(michal);
                entity = _closure2_slot1;
                entity = zuuluu.bind(tangon)(michal, entity);
 169:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useGetOrFetchSubscriptionPlan'] = tangon;
    tangon = function(argFoo) { // Original name: getSubscriptionPauseDurations
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argFoo;
            entity = global;
            report = entity.Object;
            tangon = report.keys;
            oscard = _closure1_slot0;
            michal = _closure1_slot2;
            option = 9;
            michal = michal[option];
            golfie = undefined;
            michal = oscard.bind(golfie)(michal);
            michal = michal.PauseDuration;
            report = tangon.bind(report)(michal);
            tangon = report.filter;
            michal = function(argFoo) {
                entity = global;
                zuuluu = entity.isNaN;
                tangon = entity.Number;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(entity);
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            michal = tangon.bind(report)(michal);
            report = zuuluu.status;
            tangon = _closure1_slot6;
            tangon = tangon.PAUSED;
            if(!(report === tangon)) { _fun00016_ip = 309; continue _fun00015 }
 91:
            report = zuuluu.pauseEndsAt;
            tangon = null;
            if(!(tangon == report)) { _fun00016_ip = 123; continue _fun00015 }
 103:
            tangon = {};
            report = new Array(0);
            tangon['durations'] = report;
            report = 0;
            tangon['currentDaysPaused'] = report;
            return tangon;
 123:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 10;
            offset = oscard[tangon];
            yankee = report.bind(golfie)(offset);
            offset = zuuluu.currentPeriodStart;
            yankee = yankee.bind(golfie)(offset);
            tangon = oscard[tangon];
            tangon = report.bind(golfie)(tangon);
            zuuluu = zuuluu.pauseEndsAt;
            offset = tangon.bind(golfie)(zuuluu);
            tangon = entity.Math;
            zuuluu = tangon.round;
            oscard = offset.diff;
            report = 'days';
            entity = true;
            entity = oscard.bind(offset)(yankee, report, entity);
            zuuluu = zuuluu.bind(tangon)(entity);
            tangon = new Array(0);
            entity = _closure1_slot10;
            oscard = entity.bind(golfie)(michal);
            report = oscard.bind(golfie)();
            entity = report.done;
            if(entity) { _fun00016_ip = 295; continue _fun00015 }
 234:
            offset = report.value;
            yankee = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[option];
            entity = yankee.bind(golfie)(entity);
            entity = entity.PauseDuration;
            entity = entity[offset];
            if(!(entity > zuuluu)) { _fun00016_ip = 280; continue _fun00015 }
 270:
            entity = tangon.push;
            entity = entity.bind(tangon)(offset);
 280:
            offset = oscard.bind(golfie)();
            entity = offset.done;
            report = offset;
            if(!entity) { _fun00016_ip = 234; continue _fun00015 }
 295:
            entity = {};
            entity['durations'] = tangon;
            entity['currentDaysPaused'] = zuuluu;
            return entity;
 309:
            entity = {};
            entity['durations'] = michal;
            michal = 0;
            entity['currentDaysPaused'] = michal;
            return entity;
        }
    };
    zuuluu['getSubscriptionPauseDurations'] = tangon;
    michal = function(argFoo) { // Original name: didBeginPurchaseFlowOnFractionalPremium
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = argFoo;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00018_ip = 48; continue _fun00017 }
 12:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 10;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            michal = zuuluu.isMoment;
            entity = michal.bind(zuuluu)(tangon);
 48:
            if(!entity) { _fun00018_ip = 91; continue _fun00017 }
 51:
            zuuluu = tangon.isSameOrAfter;
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            michal = 10;
            michal = report[michal];
            report = undefined;
            michal = oscard.bind(report)(michal);
            michal = michal.bind(report)();
            entity = zuuluu.bind(tangon)(michal);
 91:
            return entity;
        }
    };
    zuuluu['didBeginPurchaseFlowOnFractionalPremium'] = michal;
    return entity;
})();
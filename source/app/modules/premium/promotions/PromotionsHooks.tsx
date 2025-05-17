// app/modules/premium/promotions/PromotionsHooks.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
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
            verify = _closure1_slot10;
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
            golfie = _closure1_slot10;
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
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: useEligibleActiveOutboundPromotions
        golfie = argFoo;
        oscard = argBar;
        option = argBaz;
        report = argCor;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = oscard;
        var _closure2_slot2 = option;
        var _closure2_slot3 = report;
        verify = _closure1_slot0;
        yankee = _closure1_slot2;
        zuuluu = 6;
        offset = yankee[zuuluu];
        tangon = undefined;
        backup = verify.bind(tangon)(offset);
        foxtra = backup.useStateFromStoresArray;
        offset = _closure1_slot7;
        romeon = new Array(1);
        romeon[0] = offset;
        offset = function() {
            entity = _closure1_slot7;
            entity = entity.outboundPromotions;
            return entity;
        };
        offset = foxtra.bind(backup)(romeon, offset);
        var _closure2_slot4 = offset;
        zuuluu = yankee[zuuluu];
        yankee = verify.bind(tangon)(zuuluu);
        verify = yankee.useStateFromStores;
        zuuluu = _closure1_slot7;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            entity = _closure1_slot7;
            entity = entity.consumedInboundPromotionId;
            return entity;
        };
        verify = verify.bind(yankee)(tangon, zuuluu);
        var _closure2_slot5 = verify;
        tangon = _closure1_slot4;
        zuuluu = tangon.useMemo;
        michal = new Array(6);
        michal[0] = offset;
        michal[1] = verify;
        michal[2] = option;
        michal[3] = golfie;
        michal[4] = oscard;
        michal[5] = report;
        entity = function() {
            zuuluu = _closure2_slot4;
            michal = zuuluu.filter;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    option = argFoo;
                    michal = option.id;
                    entity = _closure2_slot5;
                    entity = michal !== entity;
                    if(!entity) { _fun00008_ip = 139; continue _fun00007 }
 22:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    offset = 7;
                    michal = michal[offset];
                    verify = undefined;
                    zuuluu = zuuluu.bind(verify)(michal);
                    michal = zuuluu.shouldShowOutboundPromotionOnPlatform;
                    michal = michal.bind(zuuluu)(option);
                    zuuluu = !michal;
                    michal = !zuuluu;
                    if(zuuluu) { _fun00008_ip = 136; continue _fun00007 }
 67:
                    zuuluu = _closure2_slot2;
                    zuuluu = !zuuluu;
                    if(!zuuluu) { _fun00008_ip = 133; continue _fun00007 }
 77:
                    tangon = _closure2_slot0;
                    tangon = !tangon;
                    if(!tangon) { _fun00008_ip = 94; continue _fun00007 }
 87:
                    golfie = _closure2_slot1;
                    tangon = !golfie;
 94:
                    if(tangon) { _fun00008_ip = 130; continue _fun00007 }
 97:
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    oscard = oscard[offset];
                    golfie = golfie.bind(verify)(oscard);
                    oscard = golfie.isTrialUserEligibleToSeeOutboundPromotion;
                    report = _closure2_slot3;
                    tangon = oscard.bind(golfie)(option, report);
 130:
                    zuuluu = tangon;
 133:
                    michal = zuuluu;
 136:
                    entity = michal;
 139:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PremiumTypes;
    var _closure1_slot8 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/promotions/PromotionsHooks.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useOutboundPromotions
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            michal = 6;
            zuuluu = backup[michal];
            romeon = undefined;
            golfie = foxtra.bind(romeon)(zuuluu);
            oscard = golfie.useStateFromStores;
            zuuluu = _closure1_slot7;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                entity = _closure1_slot7;
                entity = entity.lastFetchedActivePromotions;
                return entity;
            };
            yankee = oscard.bind(golfie)(report, zuuluu);
            var _closure2_slot0 = yankee;
            zuuluu = backup[michal];
            golfie = foxtra.bind(romeon)(zuuluu);
            oscard = golfie.useStateFromStores;
            zuuluu = _closure1_slot5;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot5;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            output = oscard.bind(golfie)(report, zuuluu);
            zuuluu = 8;
            zuuluu = backup[zuuluu];
            report = foxtra.bind(romeon)(zuuluu);
            zuuluu = report.useHasActiveTrial;
            oscard = zuuluu.bind(report)();
            michal = backup[michal];
            golfie = foxtra.bind(romeon)(michal);
            report = golfie.useStateFromStores;
            michal = _closure1_slot6;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot6;
                entity = michal.hasAnyUnexpiredOffer;
                entity = entity.bind(michal)();
                return entity;
            };
            report = report.bind(golfie)(zuuluu, michal);
            michal = 9;
            michal = backup[michal];
            zuuluu = foxtra.bind(romeon)(michal);
            michal = zuuluu.useIsInReverseTrial;
            michal = michal.bind(zuuluu)();
            verify = michal.isInReverseTrial;
            var _closure2_slot1 = verify;
            zuuluu = _closure1_slot4;
            michal = zuuluu.useState;
            sizing = false;
            michal = michal.bind(zuuluu)(sizing);
            kiloes = _closure1_slot3;
            offset = 2;
            michal = kiloes.bind(romeon)(michal, offset);
            option = 0;
            golfie = michal[option];
            zuuluu = 1;
            michal = michal[zuuluu];
            var _closure2_slot2 = michal;
            echoed = _closure1_slot4;
            result = echoed.useState;
            michal = new Array(0);
            michal = result.bind(echoed)(michal);
            michal = kiloes.bind(romeon)(michal, offset);
            offset = michal[option];
            michal = michal[zuuluu];
            var _closure2_slot3 = michal;
            kiloes = _closure1_slot4;
            option = kiloes.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = yankee;
            zuuluu[1] = verify;
            michal = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    entity = entity != zuuluu;
                    if(entity) { _fun00012_ip = 20; continue _fun00011 }
 16:
                    entity = _closure2_slot1;
 20:
                    if(!entity) { _fun00012_ip = 68; continue _fun00011 }
 23:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 10;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.wait;
                    entity = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 11;
                        michal = michal[entity];
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        entity = michal.markOutboundPromotionsSeen;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
 68:
                    entity = undefined;
                    return entity;
                }
            };
            michal = option.bind(kiloes)(michal, zuuluu);
            kiloes = _closure1_slot4;
            option = kiloes.useCallback;
            zuuluu = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                zuuluu = _closure2_slot3;
                entity = undefined;
                michal = function(argFoo) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        tangon = argFoo;
                        michal = tangon.some;
                        entity = function(argFoo) {
                            entity = argFoo;
                            entity = entity.promotion;
                            michal = entity.id;
                            entity = _closure3_slot0;
                            entity = entity.promotion;
                            entity = entity.id;
                            entity = michal === entity;
                            return entity;
                        };
                        michal = michal.bind(tangon)(entity);
                        entity = tangon;
                        if(michal) { _fun00014_ip = 67; continue _fun00013 }
 29:
                        michal = new Array(1);
                        report = 0;
                        golfie = michal;
                        oscard = tangon;
                        tangon = arraySpread(golfie, oscard, report);
                        zuuluu = _closure3_slot0;
                        michal[tangon] = zuuluu;
                        zuuluu = 1;
                        zuuluu = tangon + zuuluu;
                        entity = michal;
 67:
                        return entity;
                    }
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = new Array(0);
            michal = option.bind(kiloes)(zuuluu, michal);
            option = _closure1_slot1;
            zuuluu = 12;
            zuuluu = backup[zuuluu];
            kiloes = option.bind(romeon)(zuuluu);
            option = kiloes.isPremiumExactly;
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.TIER_2;
            zuuluu = option.bind(kiloes)(output, zuuluu);
            option = 13;
            option = backup[option];
            option = foxtra.bind(romeon)(option);
            kiloes = option.OutboundPromoDesktopUpsellExperiment;
            backup = kiloes.useExperiment;
            foxtra = {};
            option = 'useOutboundPromotions';
            foxtra['location'] = option;
            option = {};
            option['autoTrackExposure'] = sizing;
            option['disable'] = zuuluu;
            option = backup.bind(kiloes)(foxtra, option);
            option = option.enabled;
            if(option) { _fun00010_ip = 436; continue _fun00009 }
 433:
            option = zuuluu;
 436:
            var _closure2_slot4 = option;
            kiloes = _closure1_slot4;
            backup = kiloes.useEffect;
            foxtra = new Array(3);
            foxtra[0] = yankee;
            foxtra[1] = option;
            foxtra[2] = verify;
            zuuluu = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.wait;
                michal = function() {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        entity = _closure2_slot4;
                        if(!entity) { _fun00016_ip = 30; continue _fun00015 }
 10:
                        tangon = _closure2_slot0;
                        michal = null;
                        michal = michal == tangon;
                        if(michal) { _fun00016_ip = 27; continue _fun00015 }
 23:
                        michal = _closure2_slot1;
 27:
                        entity = michal;
 30:
                        if(!entity) { _fun00016_ip = 68; continue _fun00015 }
 33:
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 11;
                        michal = michal[entity];
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        entity = michal.fetchActiveOutboundPromotions;
                        entity = entity.bind(michal)();
 68:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu = backup.bind(kiloes)(zuuluu, foxtra);
            kiloes = _closure1_slot4;
            backup = kiloes.useEffect;
            foxtra = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.wait;
                michal = function() {
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 7;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.fetchClaimedOutboundPromotionCodes;
                    report = zuuluu.bind(tangon)();
                    tangon = report.then;
                    zuuluu = function(argFoo) {
                        tangon = _closure2_slot3;
                        entity = undefined;
                        zuuluu = argFoo;
                        zuuluu = tangon.bind(entity)(zuuluu);
                        zuuluu = _closure2_slot2;
                        michal = true;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.catch;
                    michal = function() {
                        tangon = _closure2_slot3;
                        entity = undefined;
                        zuuluu = new Array(0);
                        zuuluu = tangon.bind(entity)(zuuluu);
                        zuuluu = _closure2_slot2;
                        michal = true;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu = new Array(0);
            zuuluu = backup.bind(kiloes)(foxtra, zuuluu);
            zuuluu = {};
            foxtra = _closure1_slot9;
            kiloes = foxtra.bind(romeon)(offset);
            backup = kiloes.bind(romeon)();
            foxtra = backup.done;
            if(foxtra) { _fun00010_ip = 567; continue _fun00009 }
 527:
            foxtra = backup.value;
            sizing = foxtra.code;
            foxtra = foxtra.promotion;
            foxtra = foxtra.id;
            zuuluu[foxtra] = sizing;
            sizing = kiloes.bind(romeon)();
            foxtra = sizing.done;
            backup = sizing;
            if(!foxtra) { _fun00010_ip = 527; continue _fun00009 }
 567:
            entity = _closure1_slot11;
            sequen = undefined;
            vacuum = oscard;
            ctrled = report;
            source = verify;
            update = zuuluu;
            report = sequen[entity](vacuum, ctrled, source, update, echoed);
            entity = global;
            romeon = entity.Set;
            oscard = report.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            vacuum = oscard.bind(report)(entity);
            oscard = romeon.prototype;
            oscard = Object.create(oscard, {constructor: {value: romeon}});
            sequen = oscard;
            entity = new sequen[romeon](vacuum, ctrled);
            entity = entity instanceof Object ? entity : oscard;
            var _closure2_slot5 = entity;
            oscard = offset.filter;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.promotion;
                zuuluu = _closure2_slot5;
                michal = zuuluu.has;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            oscard = oscard.bind(offset)(entity);
            entity = {};
            if(!golfie) { _fun00010_ip = 681; continue _fun00009 }
 660:
            option = !option;
            if(option) { _fun00010_ip = 672; continue _fun00009 }
 666:
            offset = null;
            option = offset != yankee;
 672:
            if(option) { _fun00010_ip = 678; continue _fun00009 }
 675:
            option = verify;
 678:
            golfie = option;
 681:
            entity['promotionsLoaded'] = golfie;
            entity['activeOutboundPromotions'] = report;
            report = oscard.filter;
            tangon = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.shouldShowOutboundPromotionOnPlatform;
                entity = argFoo;
                entity = entity.promotion;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            entity['claimedEndedOutboundPromotions'] = tangon;
            entity['claimedOutboundPromotionCodeMap'] = zuuluu;
            entity['addClaimedOutboundPromotionCode'] = michal;
            return entity;
        }
    };
    zuuluu['useOutboundPromotions'] = tangon;
    tangon = function() { // Original name: useUnseenOutboundPromotions
        report = _closure1_slot0;
        offset = _closure1_slot2;
        tangon = 6;
        michal = offset[tangon];
        verify = undefined;
        option = report.bind(verify)(michal);
        golfie = option.useStateFromStores;
        michal = _closure1_slot7;
        oscard = new Array(1);
        oscard[0] = michal;
        michal = function() {
            entity = _closure1_slot7;
            entity = entity.lastSeenOutboundPromotionStartDate;
            return entity;
        };
        michal = golfie.bind(option)(oscard, michal);
        var _closure2_slot0 = michal;
        option = _closure1_slot11;
        oscard = 8;
        oscard = offset[oscard];
        golfie = report.bind(verify)(oscard);
        oscard = golfie.useHasActiveTrial;
        golfie = oscard.bind(golfie)();
        tangon = offset[tangon];
        romeon = report.bind(verify)(tangon);
        yankee = romeon.useStateFromStores;
        tangon = _closure1_slot6;
        oscard = new Array(1);
        oscard[0] = tangon;
        tangon = function() {
            michal = _closure1_slot6;
            entity = michal.hasAnyUnexpiredOffer;
            entity = entity.bind(michal)();
            return entity;
        };
        kiloes = yankee.bind(romeon)(oscard, tangon);
        tangon = 9;
        tangon = offset[tangon];
        report = report.bind(verify)(tangon);
        tangon = report.useIsInReverseTrial;
        tangon = tangon.bind(report)();
        backup = tangon.isInReverseTrial;
        foxtra = {};
        output = undefined;
        sizing = golfie;
        oscard = output[option](sizing, kiloes, backup, foxtra, romeon);
        var _closure2_slot1 = oscard;
        report = _closure1_slot4;
        tangon = report.useMemo;
        zuuluu = new Array(2);
        zuuluu[0] = oscard;
        zuuluu[1] = michal;
        michal = function() {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                if(!(entity != zuuluu)) { _fun00018_ip = 38; continue _fun00017 }
 13:
                tangon = _closure2_slot1;
                zuuluu = tangon.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    report = entity.startDate;
                    entity = global;
                    michal = entity.Date;
                    zuuluu = michal.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                    oscard = zuuluu;
                    michal = new oscard[michal](report, tangon);
                    michal = michal instanceof Object ? michal : zuuluu;
                    tangon = entity.Date;
                    report = _closure2_slot0;
                    zuuluu = tangon.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                    oscard = zuuluu;
                    entity = new oscard[tangon](report, tangon);
                    entity = entity instanceof Object ? entity : zuuluu;
                    entity = michal > entity;
                    return entity;
                };
                entity = zuuluu.bind(tangon)(entity);
                _fun00018_ip = 42; continue _fun00017;
 38:
                entity = _closure2_slot1;
 42:
                return entity;
            }
        };
        zuuluu = tangon.bind(report)(michal, zuuluu);
        michal = zuuluu.filter;
        entity = function(argFoo) {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.shouldShowOutboundPromotionOnPlatform;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useUnseenOutboundPromotions'] = tangon;
    michal = function() { // Original name: useBogoPromotion
        entity = {};
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 6;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        michal = _closure1_slot7;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            entity = _closure1_slot7;
            entity = entity.bogoPromotion;
            return entity;
        };
        michal = tangon.bind(report)(zuuluu, michal);
        entity['promotion'] = michal;
        return entity;
    };
    zuuluu['useBogoPromotion'] = michal;
    return entity;
})();
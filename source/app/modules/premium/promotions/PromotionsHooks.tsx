// app/modules/premium/promotions/PromotionsHooks.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot11;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot11;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: useEligibleActiveOutboundPromotions
        golf = argFoo;
        oscar = argBar;
        options = argBaz;
        report = argCorge;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        var _closure2_slot2 = options;
        var _closure2_slot3 = report;
        verify = _closure1_slot0;
        yankee = _closure1_slot2;
        zulu = 7;
        offset = yankee[zulu];
        tango = undefined;
        backup = verify.bind(tango)(offset);
        foxtrot = backup.useStateFromStoresArray;
        offset = _closure1_slot8;
        romeo = new Array(1);
        romeo[0] = offset;
        offset = function() {
            entity = _closure1_slot8;
            entity = entity.outboundPromotions;
            return entity;
        };
        offset = foxtrot.bind(backup)(romeo, offset);
        var _closure2_slot4 = offset;
        zulu = yankee[zulu];
        yankee = verify.bind(tango)(zulu);
        verify = yankee.useStateFromStores;
        zulu = _closure1_slot8;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            entity = _closure1_slot8;
            entity = entity.consumedInboundPromotionId;
            return entity;
        };
        verify = verify.bind(yankee)(tango, zulu);
        var _closure2_slot5 = verify;
        tango = _closure1_slot4;
        zulu = tango.useMemo;
        mike = new Array(6);
        mike[0] = offset;
        mike[1] = verify;
        mike[2] = options;
        mike[3] = golf;
        mike[4] = oscar;
        mike[5] = report;
        entity = function() {
            zulu = _closure2_slot4;
            mike = zulu.filter;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    options = argFoo;
                    mike = options.id;
                    entity = _closure2_slot5;
                    entity = mike !== entity;
                    if(!entity) { _fun00008_ip = 139; continue _fun00007 }
 22:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    offset = 8;
                    mike = mike[offset];
                    verify = undefined;
                    zulu = zulu.bind(verify)(mike);
                    mike = zulu.shouldShowOutboundPromotionOnPlatform;
                    mike = mike.bind(zulu)(options);
                    zulu = !mike;
                    mike = !zulu;
                    if(zulu) { _fun00008_ip = 136; continue _fun00007 }
 67:
                    zulu = _closure2_slot2;
                    zulu = !zulu;
                    if(!zulu) { _fun00008_ip = 133; continue _fun00007 }
 77:
                    tango = _closure2_slot0;
                    tango = !tango;
                    if(!tango) { _fun00008_ip = 94; continue _fun00007 }
 87:
                    golf = _closure2_slot1;
                    tango = !golf;
 94:
                    if(tango) { _fun00008_ip = 130; continue _fun00007 }
 97:
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    oscar = oscar[offset];
                    golf = golf.bind(verify)(oscar);
                    oscar = golf.isTrialUserEligibleToSeeOutboundPromotion;
                    report = _closure2_slot3;
                    tango = oscar.bind(golf)(options, report);
 130:
                    zulu = tango;
 133:
                    mike = zulu;
 136:
                    entity = mike;
 139:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PremiumTypes;
    var _closure1_slot9 = tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/promotions/PromotionsHooks.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: useOutboundPromotions
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            mike = 7;
            zulu = backup[mike];
            romeo = undefined;
            golf = foxtrot.bind(romeo)(zulu);
            oscar = golf.useStateFromStores;
            zulu = _closure1_slot8;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                entity = _closure1_slot8;
                entity = entity.lastFetchedActivePromotions;
                return entity;
            };
            offset = oscar.bind(golf)(report, zulu);
            var _closure2_slot0 = offset;
            zulu = backup[mike];
            golf = foxtrot.bind(romeo)(zulu);
            oscar = golf.useStateFromStores;
            zulu = _closure1_slot5;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                mike = _closure1_slot5;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            output = oscar.bind(golf)(report, zulu);
            zulu = 9;
            zulu = backup[zulu];
            report = foxtrot.bind(romeo)(zulu);
            zulu = report.useHasActiveTrial;
            yankee = zulu.bind(report)();
            zulu = backup[mike];
            golf = foxtrot.bind(romeo)(zulu);
            oscar = golf.useStateFromStores;
            zulu = _closure1_slot7;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                mike = _closure1_slot7;
                entity = mike.hasAnyUnexpiredOffer;
                entity = entity.bind(mike)();
                return entity;
            };
            oscar = oscar.bind(golf)(report, zulu);
            mike = backup[mike];
            golf = foxtrot.bind(romeo)(mike);
            report = golf.useStateFromStores;
            mike = _closure1_slot6;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                mike = _closure1_slot6;
                entity = mike.inReverseTrial;
                entity = entity.bind(mike)();
                return entity;
            };
            report = report.bind(golf)(zulu, mike);
            zulu = _closure1_slot4;
            mike = zulu.useState;
            sizing = false;
            mike = mike.bind(zulu)(sizing);
            kilo = _closure1_slot3;
            verify = 2;
            mike = kilo.bind(romeo)(mike, verify);
            options = 0;
            golf = mike[options];
            zulu = 1;
            mike = mike[zulu];
            var _closure2_slot1 = mike;
            echo = _closure1_slot4;
            result = echo.useState;
            mike = new Array(0);
            mike = result.bind(echo)(mike);
            mike = kilo.bind(romeo)(mike, verify);
            verify = mike[options];
            mike = mike[zulu];
            var _closure2_slot2 = mike;
            kilo = _closure1_slot4;
            options = kilo.useEffect;
            zulu = new Array(1);
            zulu[0] = offset;
            mike = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = _closure2_slot0;
                    entity = null;
                    if(!(entity != mike)) { _fun00012_ip = 58; continue _fun00011 }
 13:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 10;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.wait;
                    entity = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 11;
                        mike = mike[entity];
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        entity = mike.markOutboundPromotionsSeen;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
 58:
                    entity = undefined;
                    return entity;
                }
            };
            mike = options.bind(kilo)(mike, zulu);
            kilo = _closure1_slot4;
            options = kilo.useCallback;
            zulu = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                zulu = _closure2_slot2;
                entity = undefined;
                mike = function(argFoo) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        tango = argFoo;
                        mike = tango.some;
                        entity = function(argFoo) {
                            entity = argFoo;
                            entity = entity.promotion;
                            mike = entity.id;
                            entity = _closure3_slot0;
                            entity = entity.promotion;
                            entity = entity.id;
                            entity = mike === entity;
                            return entity;
                        };
                        mike = mike.bind(tango)(entity);
                        entity = tango;
                        if(mike) { _fun00014_ip = 67; continue _fun00013 }
 29:
                        mike = new Array(1);
                        report = 0;
                        golf = mike;
                        oscar = tango;
                        tango = arraySpread(golf, oscar, report);
                        zulu = _closure3_slot0;
                        mike[tango] = zulu;
                        zulu = 1;
                        zulu = tango + zulu;
                        entity = mike;
 67:
                        return entity;
                    }
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = new Array(0);
            mike = options.bind(kilo)(zulu, mike);
            options = _closure1_slot1;
            zulu = 12;
            zulu = backup[zulu];
            kilo = options.bind(romeo)(zulu);
            options = kilo.isPremiumExactly;
            zulu = _closure1_slot9;
            zulu = zulu.TIER_2;
            zulu = options.bind(kilo)(output, zulu);
            options = 13;
            options = backup[options];
            options = foxtrot.bind(romeo)(options);
            kilo = options.OutboundPromoDesktopUpsellExperiment;
            backup = kilo.useExperiment;
            foxtrot = {};
            options = 'useOutboundPromotions';
            foxtrot['location'] = options;
            options = {};
            options['autoTrackExposure'] = sizing;
            options['disable'] = zulu;
            options = backup.bind(kilo)(foxtrot, options);
            options = options.enabled;
            if(options) { _fun00010_ip = 439; continue _fun00009 }
 436:
            options = zulu;
 439:
            var _closure2_slot3 = options;
            kilo = _closure1_slot4;
            backup = kilo.useEffect;
            foxtrot = new Array(2);
            foxtrot[0] = offset;
            foxtrot[1] = options;
            zulu = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.wait;
                mike = function() {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        entity = _closure2_slot3;
                        if(!entity) { _fun00016_ip = 20; continue _fun00015 }
 10:
                        zulu = _closure2_slot0;
                        mike = null;
                        entity = mike == zulu;
 20:
                        if(!entity) { _fun00016_ip = 58; continue _fun00015 }
 23:
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 11;
                        mike = mike[entity];
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        entity = mike.fetchActiveOutboundPromotions;
                        entity = entity.bind(mike)();
 58:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            zulu = backup.bind(kilo)(zulu, foxtrot);
            kilo = _closure1_slot4;
            backup = kilo.useEffect;
            foxtrot = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.wait;
                mike = function() {
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 8;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.fetchClaimedOutboundPromotionCodes;
                    report = zulu.bind(tango)();
                    tango = report.then;
                    zulu = function(argFoo) {
                        tango = _closure2_slot2;
                        entity = undefined;
                        zulu = argFoo;
                        zulu = tango.bind(entity)(zulu);
                        zulu = _closure2_slot1;
                        mike = true;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    tango = tango.bind(report)(zulu);
                    zulu = tango.catch;
                    mike = function() {
                        tango = _closure2_slot2;
                        entity = undefined;
                        zulu = new Array(0);
                        zulu = tango.bind(entity)(zulu);
                        zulu = _closure2_slot1;
                        mike = true;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            zulu = new Array(0);
            zulu = backup.bind(kilo)(foxtrot, zulu);
            zulu = {};
            foxtrot = _closure1_slot10;
            kilo = foxtrot.bind(romeo)(verify);
            backup = kilo.bind(romeo)();
            foxtrot = backup.done;
            if(foxtrot) { _fun00010_ip = 566; continue _fun00009 }
 526:
            foxtrot = backup.value;
            sizing = foxtrot.code;
            foxtrot = foxtrot.promotion;
            foxtrot = foxtrot.id;
            zulu[foxtrot] = sizing;
            sizing = kilo.bind(romeo)();
            foxtrot = sizing.done;
            backup = sizing;
            if(!foxtrot) { _fun00010_ip = 526; continue _fun00009 }
 566:
            entity = _closure1_slot12;
            sequence = undefined;
            vacuum = yankee;
            control = oscar;
            source = report;
            update = zulu;
            report = sequence[entity](vacuum, control, source, update, echo);
            entity = global;
            yankee = entity.Set;
            oscar = report.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            vacuum = oscar.bind(report)(entity);
            oscar = yankee.prototype;
            oscar = Object.create(oscar, {constructor: {value: yankee}});
            sequence = oscar;
            entity = new sequence[yankee](vacuum, control);
            entity = entity instanceof Object ? entity : oscar;
            var _closure2_slot4 = entity;
            oscar = verify.filter;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.promotion;
                zulu = _closure2_slot4;
                mike = zulu.has;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                entity = !entity;
                return entity;
            };
            oscar = oscar.bind(verify)(entity);
            entity = {};
            if(!golf) { _fun00010_ip = 674; continue _fun00009 }
 659:
            options = !options;
            if(options) { _fun00010_ip = 671; continue _fun00009 }
 665:
            verify = null;
            options = verify != offset;
 671:
            golf = options;
 674:
            entity['promotionsLoaded'] = golf;
            entity['activeOutboundPromotions'] = report;
            report = oscar.filter;
            tango = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.shouldShowOutboundPromotionOnPlatform;
                entity = argFoo;
                entity = entity.promotion;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = report.bind(oscar)(tango);
            entity['claimedEndedOutboundPromotions'] = tango;
            entity['claimedOutboundPromotionCodeMap'] = zulu;
            entity['addClaimedOutboundPromotionCode'] = mike;
            return entity;
        }
    };
    zulu['useOutboundPromotions'] = tango;
    tango = function() { // Original name: useUnseenOutboundPromotions
        report = _closure1_slot0;
        offset = _closure1_slot2;
        tango = 7;
        mike = offset[tango];
        verify = undefined;
        options = report.bind(verify)(mike);
        golf = options.useStateFromStores;
        mike = _closure1_slot8;
        oscar = new Array(1);
        oscar[0] = mike;
        mike = function() {
            entity = _closure1_slot8;
            entity = entity.lastSeenOutboundPromotionStartDate;
            return entity;
        };
        mike = golf.bind(options)(oscar, mike);
        var _closure2_slot0 = mike;
        options = _closure1_slot12;
        oscar = 9;
        oscar = offset[oscar];
        golf = report.bind(verify)(oscar);
        oscar = golf.useHasActiveTrial;
        golf = oscar.bind(golf)();
        oscar = offset[tango];
        foxtrot = report.bind(verify)(oscar);
        romeo = foxtrot.useStateFromStores;
        oscar = _closure1_slot7;
        yankee = new Array(1);
        yankee[0] = oscar;
        oscar = function() {
            mike = _closure1_slot7;
            entity = mike.hasAnyUnexpiredOffer;
            entity = entity.bind(mike)();
            return entity;
        };
        oscar = romeo.bind(foxtrot)(yankee, oscar);
        tango = offset[tango];
        yankee = report.bind(verify)(tango);
        offset = yankee.useStateFromStores;
        tango = _closure1_slot6;
        report = new Array(1);
        report[0] = tango;
        tango = function() {
            mike = _closure1_slot6;
            entity = mike.inReverseTrial;
            entity = entity.bind(mike)();
            return entity;
        };
        kilo = offset.bind(yankee)(report, tango);
        backup = {};
        result = undefined;
        output = golf;
        sizing = oscar;
        oscar = result[options](output, sizing, kilo, backup, foxtrot);
        var _closure2_slot1 = oscar;
        report = _closure1_slot4;
        tango = report.useMemo;
        zulu = new Array(2);
        zulu[0] = oscar;
        zulu[1] = mike;
        mike = function() {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                if(!(entity != zulu)) { _fun00018_ip = 38; continue _fun00017 }
 13:
                tango = _closure2_slot1;
                zulu = tango.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    report = entity.startDate;
                    entity = global;
                    mike = entity.Date;
                    zulu = mike.prototype;
                    zulu = Object.create(zulu, {constructor: {value: mike}});
                    oscar = zulu;
                    mike = new oscar[mike](report, tango);
                    mike = mike instanceof Object ? mike : zulu;
                    tango = entity.Date;
                    report = _closure2_slot0;
                    zulu = tango.prototype;
                    zulu = Object.create(zulu, {constructor: {value: tango}});
                    oscar = zulu;
                    entity = new oscar[tango](report, tango);
                    entity = entity instanceof Object ? entity : zulu;
                    entity = mike > entity;
                    return entity;
                };
                entity = zulu.bind(tango)(entity);
                _fun00018_ip = 42; continue _fun00017;
 38:
                entity = _closure2_slot1;
 42:
                return entity;
            }
        };
        zulu = tango.bind(report)(mike, zulu);
        mike = zulu.filter;
        entity = function(argFoo) {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.shouldShowOutboundPromotionOnPlatform;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['useUnseenOutboundPromotions'] = tango;
    mike = function() { // Original name: useBogoPromotion
        entity = {};
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 7;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot8;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            entity = _closure1_slot8;
            entity = entity.bogoPromotion;
            return entity;
        };
        mike = tango.bind(report)(zulu, mike);
        entity['promotion'] = mike;
        return entity;
    };
    zulu['useBogoPromotion'] = mike;
    return entity;
})();
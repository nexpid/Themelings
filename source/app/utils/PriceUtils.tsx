// app/utils/PriceUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    report = function(argFoo, argBar, argBaz) { // Original name: formatPrice
        _fun41436: for(var _fun41436_ip = 0; ; ) switch(_fun41436_ip) {
 0:
            oscar = argBaz;
            entity = null;
            mike = entity == oscar;
            zulu = undefined;
            report = undefined;
            if(mike) { _fun41436_ip = 24; continue _fun41436 }
 16:
            report = oscar.localeOverride;
 24:
            if(!(entity == report)) { _fun41436_ip = 41; continue _fun41436 }
 28:
            entity = _closure1_slot2;
            report = entity.locale;
 41:
            mike = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 2;
            entity = tango[entity];
            tango = mike.bind(zulu)(entity);
            zulu = tango.formatPrice;
            offset = argFoo;
            verify = argBar;
            yankee = tango;
            options = report;
            golf = oscar;
            entity = yankee[zulu](offset, verify, options, golf, oscar);
            return entity;
        }
    };
    var _closure1_slot4 = report;
    tango = function(argFoo, argBar, argBaz) { // Original name: formatRate
        _fun41437: for(var _fun41437_ip = 0; ; ) switch(_fun41437_ip) {
 0:
            report = argFoo;
            options = argBar;
            golf = argBaz;
            mike = _closure1_slot3;
            mike = mike.YEAR;
            if(!(options !== mike)) { _fun41437_ip = 273; continue _fun41437 }
 29:
            mike = _closure1_slot3;
            mike = mike.MONTH;
            if(!(options === mike)) { _fun41437_ip = 53; continue _fun41437 }
 43:
            mike = 1;
            if(!(mike !== golf)) { _fun41437_ip = 206; continue _fun41437 }
 53:
            mike = _closure1_slot3;
            mike = mike.MONTH;
            if(!(options === mike)) { _fun41437_ip = 74; continue _fun41437 }
 67:
            mike = 1;
            if(!(!(golf > mike))) { _fun41437_ip = 134; continue _fun41437 }
 74:
            mike = global;
            tango = mike.Error;
            mike = mike.HermesInternal;
            oscar = mike.concat;
            zulu = 'Unsupported interval type: ';
            mike = ', and interval count: ';
            romeo = oscar.bind(zulu)(options, mike, golf);
            zulu = tango.prototype;
            zulu = Object.create(zulu, {constructor: {value: tango}});
            foxtrot = zulu;
            mike = new foxtrot[tango](romeo, yankee);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 134:
            options = _closure1_slot0;
            verify = _closure1_slot1;
            mike = 3;
            tango = verify[mike];
            zulu = undefined;
            tango = options.bind(zulu)(tango);
            oscar = tango.intl;
            tango = oscar.formatToPlainString;
            mike = verify[mike];
            mike = options.bind(zulu)(mike);
            mike = mike.t;
            zulu = mike.Qc+9w8;
            mike = {};
            mike['price'] = report;
            mike['intervalCount'] = golf;
            mike = tango.bind(oscar)(zulu, mike);
            return mike;
 206:
            golf = _closure1_slot0;
            options = _closure1_slot1;
            mike = 3;
            tango = options[mike];
            zulu = undefined;
            tango = golf.bind(zulu)(tango);
            oscar = tango.intl;
            tango = oscar.formatToPlainString;
            mike = options[mike];
            mike = golf.bind(zulu)(mike);
            mike = mike.t;
            zulu = mike.AbOLNj;
            mike = {};
            mike['price'] = report;
            mike = tango.bind(oscar)(zulu, mike);
            return mike;
 273:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            entity = 3;
            zulu = golf[entity];
            mike = undefined;
            zulu = oscar.bind(mike)(zulu);
            tango = zulu.intl;
            zulu = tango.formatToPlainString;
            entity = golf[entity];
            entity = oscar.bind(mike)(entity);
            entity = entity.t;
            mike = entity.rS8FAw;
            entity = {};
            entity['price'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, oscar);
    entity = 0;
    verify = options[entity];
    oscar = argBaz;
    entity = undefined;
    oscar = oscar.bind(entity)(verify);
    var _closure1_slot2 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.SubscriptionIntervalTypes;
    var _closure1_slot3 = oscar;
    oscar = 5;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'utils/PriceUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['formatPrice'] = report;
    zulu['formatRate'] = tango;
    tango = function(argFoo, argBar) { // Original name: formatPercent
        entity = global;
        tango = entity.Intl;
        zulu = tango.NumberFormat;
        mike = argFoo;
        entity = {'style': 'percent', 'minimumFractionDigits': 0};
        zulu = zulu.bind(tango)(mike, entity);
        mike = zulu.format;
        entity = argBar;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['formatPercent'] = tango;
    mike = function(argFoo) { // Original name: formatSubscriptionPlanRate
        _fun41439: for(var _fun41439_ip = 0; ; ) switch(_fun41439_ip) {
 0:
            entity = argFoo;
            mike = 'interval_count';
            mike = mike in entity;
            if(mike) { _fun41439_ip = 22; continue _fun41439 }
 14:
            report = entity.intervalCount;
            _fun41439_ip = 28; continue _fun41439;
 22:
            report = entity.interval_count;
 28:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 4;
            mike = tango[mike];
            tango = undefined;
            golf = zulu.bind(tango)(mike);
            zulu = golf.getPrice;
            mike = entity.id;
            mike = zulu.bind(golf)(mike);
            zulu = _closure1_slot5;
            golf = _closure1_slot4;
            oscar = mike.amount;
            mike = mike.currency;
            mike = golf.bind(tango)(oscar, mike);
            entity = entity.interval;
            entity = zulu.bind(tango)(mike, entity, report);
            return entity;
        }
    };
    zulu['formatSubscriptionPlanRate'] = mike;
    return entity;
})();
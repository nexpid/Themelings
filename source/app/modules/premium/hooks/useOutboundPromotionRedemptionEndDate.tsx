// app/modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    verify = golf.bind(entity)(tango);
    options = verify.duration;
    golf = 30;
    tango = 'days';
    tango = options.bind(verify)(golf, tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useOutboundPromotionRedemptionEndDate
        oscar = argFoo;
        report = argBar;
        var _closure2_slot0 = oscar;
        var _closure2_slot1 = report;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun96310: for(var _fun96310_ip = 0; ; ) switch(_fun96310_ip) {
 0:
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 2;
                entity = zulu[entity];
                golf = undefined;
                tango = mike.bind(golf)(entity);
                zulu = tango.dateFormat;
                entity = _closure2_slot1;
                if(entity) { _fun96310_ip = 78; continue _fun96310 }
 41:
                mike = _closure1_slot1;
                options = _closure1_slot2;
                entity = 1;
                entity = options[entity];
                mike = mike.bind(golf)(entity);
                entity = _closure2_slot0;
                entity = entity.endDate;
                mike = mike.bind(golf)(entity);
                _fun96310_ip = 183; continue _fun96310;
 78:
                entity = _closure2_slot0;
                options = entity.outboundRedemptionEndDate;
                entity = null;
                if(!(entity == options)) { _fun96310_ip = 145; continue _fun96310 }
 94:
                options = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 1;
                entity = verify[entity];
                options = options.bind(golf)(entity);
                entity = _closure2_slot0;
                entity = entity.endDate;
                verify = options.bind(golf)(entity);
                options = verify.add;
                entity = _closure1_slot4;
                entity = options.bind(verify)(entity);
                _fun96310_ip = 180; continue _fun96310;
 145:
                options = _closure1_slot1;
                verify = _closure1_slot2;
                oscar = 1;
                oscar = verify[oscar];
                oscar = options.bind(golf)(oscar);
                report = _closure2_slot0;
                report = report.outboundRedemptionEndDate;
                entity = oscar.bind(golf)(report);
 180:
                mike = entity;
 183:
                entity = 'LL';
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();
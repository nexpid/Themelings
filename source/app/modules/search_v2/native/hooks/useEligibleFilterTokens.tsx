// app/modules/search_v2/native/hooks/useEligibleFilterTokens.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: useEligibleFilterTokens
        report = argFoo;
        var _closure2_slot0 = report;
        oscar = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        golf = oscar.bind(zulu)(tango);
        oscar = golf.useStateFromStores;
        zulu = _closure1_slot3;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            entity = _closure1_slot3;
            entity = entity.hidePersonalInformation;
            return entity;
        };
        oscar = oscar.bind(golf)(tango, zulu);
        var _closure2_slot1 = oscar;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        report = report.type;
        mike[1] = report;
        entity = function() {
            _fun112865: for(var _fun112865_ip = 0; ; ) switch(_fun112865_ip) {
 0:
                entity = new Array(0);
                mike = _closure2_slot1;
                if(mike) { _fun112865_ip = 57; continue _fun112865 }
 14:
                report = entity.push;
                tango = _closure1_slot4;
                tango = tango.FILTER_FROM;
                tango = report.bind(entity)(tango);
                tango = entity.push;
                mike = _closure1_slot4;
                mike = mike.FILTER_MENTIONS;
                mike = tango.bind(entity)(mike);
 57:
                report = entity.push;
                tango = _closure1_slot4;
                tango = tango.FILTER_HAS;
                tango = report.bind(entity)(tango);
                tango = _closure2_slot0;
                report = tango.type;
                tango = _closure1_slot5;
                tango = tango.GUILD;
                if(!(report === tango)) { _fun112865_ip = 123; continue _fun112865 }
 103:
                report = entity.push;
                tango = _closure1_slot4;
                tango = tango.FILTER_IN;
                tango = report.bind(entity)(tango);
 123:
                zulu = _closure2_slot0;
                tango = zulu.type;
                zulu = _closure1_slot5;
                zulu = zulu.GUILD_CHANNEL;
                if(!(tango === zulu)) { _fun112865_ip = 166; continue _fun112865 }
 146:
                tango = entity.push;
                zulu = _closure1_slot4;
                zulu = zulu.FILTER_IN;
                zulu = tango.bind(entity)(zulu);
 166:
                tango = entity.push;
                zulu = _closure1_slot4;
                zulu = zulu.FILTER_ON;
                zulu = tango.bind(entity)(zulu);
                tango = entity.push;
                zulu = _closure1_slot4;
                zulu = zulu.FILTER_BEFORE;
                zulu = tango.bind(entity)(zulu);
                zulu = entity.push;
                mike = _closure1_slot4;
                mike = mike.FILTER_AFTER;
                mike = zulu.bind(entity)(mike);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot6 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot2 = report;
    report = 1;
    options = golf[report];
    report = argBaz;
    report = report.bind(entity)(options);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.SearchTokenTypes;
    var _closure1_slot4 = options;
    report = report.SearchTypes;
    var _closure1_slot5 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/search_v2/native/hooks/useEligibleFilterTokens.tsx';
    report = oscar.bind(golf)(report);
    zulu['useEligibleFilterTokens'] = tango;
    mike = function(argFoo) { // Original name: useEligibleFilterTokensSet
        report = _closure1_slot6;
        tango = undefined;
        zulu = argFoo;
        report = report.bind(tango)(zulu);
        var _closure2_slot0 = report;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            entity = global;
            zulu = entity.Set;
            tango = _closure2_slot0;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useEligibleFilterTokensSet'] = mike;
    return entity;
})();
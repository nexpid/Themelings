// app/modules/client_themes/native/useThemedHeaderOptions.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    tango = {};
    tango['headerBackground'] = entity;
    tango['contentStyle'] = entity;
    var _closure1_slot5 = tango;
    tango = function() { // Original name: headerBackground
        tango = _closure1_slot4;
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 2;
        entity = zulu[entity];
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = {'absolute': true, 'tall': true, 'wide': true};
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/client_themes/native/useThemedHeaderOptions.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useThemedHeaderOptions
        oscar = _closure1_slot1;
        golf = _closure1_slot2;
        zulu = 3;
        zulu = golf[zulu];
        tango = undefined;
        zulu = oscar.bind(tango)(zulu);
        report = zulu.bind(tango)();
        var _closure2_slot0 = report;
        zulu = 4;
        zulu = golf[zulu];
        zulu = oscar.bind(tango)(zulu);
        zulu = zulu.bind(tango)();
        oscar = zulu.top;
        var _closure2_slot1 = oscar;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun118326: for(var _fun118326_ip = 0; ; ) switch(_fun118326_ip) {
 0:
                entity = _closure2_slot0;
                if(entity) { _fun118326_ip = 19; continue _fun118326 }
 13:
                entity = _closure1_slot5;
                return entity;
 19:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 5;
                tango = tango[entity];
                oscar = undefined;
                report = report.bind(oscar)(tango);
                tango = report.isIOS;
                tango = tango.bind(report)();
                if(tango) { _fun118326_ip = 82; continue _fun118326 }
 54:
                tango = {};
                report = _closure1_slot6;
                tango['headerBackground'] = report;
                report = _closure1_slot5;
                report = report.contentStyle;
                tango['contentStyle'] = report;
                return tango;
 82:
                report = _closure2_slot1;
                tango = 50;
                report = report > tango;
                tango = 0;
                if(!report) { _fun118326_ip = 101; continue _fun118326 }
 98:
                tango = entity;
 101:
                report = _closure1_slot0;
                golf = _closure1_slot2;
                entity = 6;
                entity = golf[entity];
                report = report.bind(oscar)(entity);
                entity = report.isIpadOS;
                entity = entity.bind(report)();
                report = 44;
                if(!entity) { _fun118326_ip = 140; continue _fun118326 }
 137:
                report = 46;
 140:
                entity = {};
                mike = _closure1_slot6;
                entity['headerBackground'] = mike;
                mike = {};
                zulu = _closure2_slot1;
                zulu = -zulu;
                tango = zulu + tango;
                zulu = 56;
                zulu = zulu - report;
                zulu = tango + zulu;
                mike['marginTop'] = zulu;
                entity['contentStyle'] = mike;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();
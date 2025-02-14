// app/modules/locale/native/LocaleUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.getSystemLocale;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/locale/native/LocaleUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() {
        _fun124634: for(var _fun124634_ip = 0; ; ) switch(_fun124634_ip) {
 0:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 4;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.getSuperProperties;
            zulu = zulu.bind(tango)();
            tango = null;
            report = tango == zulu;
            tango = undefined;
            if(report) { _fun124634_ip = 52; continue _fun124634 }
 46:
            tango = zulu.os;
 52:
            zulu = 'iOS';
            zulu = zulu === tango;
            if(!zulu) { _fun124634_ip = 104; continue _fun124634 }
 65:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 5;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            tango = tango.intl;
            report = tango.currentLocale;
            tango = 'en-US';
            zulu = tango === report;
 104:
            if(!zulu) { _fun124634_ip = 130; continue _fun124634 }
 107:
            tango = _closure1_slot3;
            oscar = tango.bind(entity)();
            report = oscar.startsWith;
            tango = 'es';
            zulu = report.bind(oscar)(tango);
 130:
            if(!zulu) { _fun124634_ip = 286; continue _fun124634 }
 136:
            report = _closure1_slot1;
            options = _closure1_slot2;
            tango = 6;
            zulu = options[tango];
            oscar = report.bind(entity)(zulu);
            report = oscar.trackExposure;
            zulu = {};
            golf = 'caaf7b_1';
            zulu['location'] = golf;
            zulu = report.bind(oscar)(zulu);
            golf = _closure1_slot0;
            zulu = 7;
            report = options[zulu];
            report = golf.bind(entity)(report);
            oscar = report.HotspotStore;
            report = oscar.hasHotspot;
            zulu = options[zulu];
            zulu = golf.bind(entity)(zulu);
            zulu = zulu.HotspotLocations;
            zulu = zulu.CHANGE_LANGUAGE_MODAL;
            zulu = report.bind(oscar)(zulu);
            if(!zulu) { _fun124634_ip = 286; continue _fun124634 }
 236:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[tango];
            report = zulu.bind(entity)(mike);
            tango = report.subscribe;
            zulu = {};
            mike = '1';
            zulu['location'] = mike;
            mike = function(argFoo) {
                _fun124635: for(var _fun124635_ip = 0; ; ) switch(_fun124635_ip) {
 0:
                    entity = argFoo;
                    entity = entity.enabled;
                    if(!entity) { _fun124635_ip = 95; continue _fun124635 }
 11:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 8;
                    mike = report[mike];
                    zulu = undefined;
                    golf = tango.bind(zulu)(mike);
                    oscar = golf.openLazy;
                    mike = {};
                    options = function() { // Original name: importer
                        zulu = _closure1_slot0;
                        entity = _closure1_slot2;
                        mike = 10;
                        mike = entity[mike];
                        tango = undefined;
                        zulu = zulu.bind(tango)(mike);
                        mike = 9;
                        mike = entity[mike];
                        entity = entity.paths;
                        zulu = zulu.bind(tango)(mike, entity);
                        mike = zulu.then;
                        entity = function(argFoo) {
                            mike = argFoo;
                            mike = mike.default;
                            var _closure5_slot0 = mike;
                            entity = function(argFoo) {
                                tango = _closure1_slot5;
                                zulu = _closure5_slot0;
                                mike = {};
                                report = argFoo;
                                oscar = mike;
                                entity = copyDataProperties(oscar, report);
                                entity = undefined;
                                entity = tango.bind(entity)(zulu, mike);
                                return entity;
                            };
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    mike['importer'] = options;
                    mike = oscar.bind(golf)(mike);
                    mike = 4;
                    mike = report[mike];
                    zulu = tango.bind(zulu)(mike);
                    mike = zulu.track;
                    entity = _closure1_slot4;
                    entity = entity.CHANGE_LANGUAGE_MODAL_SHOWN;
                    entity = mike.bind(zulu)(entity);
 95:
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu, mike);
 286:
            return entity;
        }
    };
    zulu['maybeShowChangeLanguageToast'] = mike;
    return entity;
})();
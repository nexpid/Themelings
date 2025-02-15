// app/modules/screen/native/drawer/useDrawerWidth.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: computeTabletDrawerWidth
        _fun69756: for(var _fun69756_ip = 0; ; ) switch(_fun69756_ip) {
 0:
            entity = argBar;
            if(entity) { _fun69756_ip = 45; continue _fun69756 }
 9:
            entity = global;
            report = entity.Math;
            tango = report.min;
            zulu = _closure1_slot4;
            oscar = _closure1_slot5;
            entity = argFoo;
            entity = entity - oscar;
            entity = tango.bind(report)(zulu, entity);
            _fun69756_ip = 49; continue _fun69756;
 45:
            entity = _closure1_slot3;
 49:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    options = tango.DM_WIDTH;
    tango = 260;
    tango = tango + options;
    var _closure1_slot3 = tango;
    report = 300;
    report = report + options;
    var _closure1_slot4 = report;
    report = 32;
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/screen/native/drawer/useDrawerWidth.tsx';
    report = oscar.bind(golf)(report);
    zulu['DRAWER_LEFT_WIDTH_MIN'] = tango;
    tango = function() { // Original name: getDrawerWidth
        _fun69757: for(var _fun69757_ip = 0; ; ) switch(_fun69757_ip) {
 0:
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 1;
            entity = oscar[entity];
            report = undefined;
            tango = zulu.bind(report)(entity);
            entity = tango.getAppContainerDimensions;
            entity = entity.bind(tango)();
            tango = entity.width;
            entity = 2;
            entity = oscar[entity];
            zulu = zulu.bind(report)(entity);
            entity = zulu.getChatLayout;
            entity = entity.bind(zulu)();
            oscar = entity.isChatBesideChannelList;
            zulu = entity.isChatLockedOpen;
            entity = tango;
            if(!oscar) { _fun69757_ip = 90; continue _fun69757 }
 80:
            mike = _closure1_slot6;
            entity = mike.bind(report)(tango, zulu);
 90:
            return entity;
        }
    };
    zulu['getDrawerWidth'] = tango;
    mike = function() { // Original name: useDrawerWidth
        _fun69758: for(var _fun69758_ip = 0; ; ) switch(_fun69758_ip) {
 0:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            entity = 1;
            entity = oscar[entity];
            report = undefined;
            entity = zulu.bind(report)(entity);
            entity = entity.bind(report)();
            tango = entity.width;
            entity = 2;
            entity = oscar[entity];
            entity = zulu.bind(report)(entity);
            entity = entity.bind(report)();
            oscar = entity.isChatBesideChannelList;
            zulu = entity.isChatLockedOpen;
            entity = tango;
            if(!oscar) { _fun69758_ip = 78; continue _fun69758 }
 68:
            mike = _closure1_slot6;
            entity = mike.bind(report)(tango, zulu);
 78:
            return entity;
        }
    };
    zulu['useDrawerWidth'] = mike;
    return entity;
})();
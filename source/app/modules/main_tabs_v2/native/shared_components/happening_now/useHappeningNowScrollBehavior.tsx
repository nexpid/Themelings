// app/modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    zulu = argFred;
    report = argPlugh;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    oscar = report[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(oscar);
    var _closure1_slot0 = tango;
    tango = 1;
    oscar = report[tango];
    tango = argCorge;
    tango = tango.bind(entity)(oscar);
    var _closure1_slot1 = tango;
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: useHappeningNowScrollBehavior
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        report = _closure1_slot1;
        tango = report.useState;
        zulu = false;
        options = tango.bind(report)(zulu);
        tango = _closure1_slot0;
        zulu = undefined;
        mike = 2;
        tango = tango.bind(zulu)(options, mike);
        mike = 0;
        mike = tango[mike];
        zulu = 1;
        zulu = tango[zulu];
        var _closure2_slot2 = zulu;
        tango = report.useCallback;
        zulu = new Array(2);
        zulu[0] = golf;
        zulu[1] = oscar;
        entity = function(argFoo) {
            mike = argFoo;
            report = _closure2_slot2;
            entity = mike.nativeEvent;
            entity = entity.contentOffset;
            tango = entity.x;
            entity = _closure2_slot0;
            tango = tango < entity;
            entity = undefined;
            tango = report.bind(entity)(tango);
            tango = _closure2_slot1;
            zulu = mike.nativeEvent;
            zulu = zulu.contentOffset;
            zulu = zulu.x;
            mike = mike.nativeEvent;
            mike = mike.layoutMeasurement;
            mike = mike.width;
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        };
        zulu = tango.bind(report)(entity, zulu);
        entity = new Array(2);
        entity[0] = zulu;
        entity[1] = mike;
        return entity;
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: useHappeningNowScrollSnapping
        _fun115055: for(var _fun115055_ip = 0; ; ) switch(_fun115055_ip) {
 0:
            verify = argFoo;
            mike = verify.current;
            options = null;
            zulu = options == mike;
            entity = undefined;
            if(zulu) { _fun115055_ip = 52; continue _fun115055 }
 19:
            mike = mike.state;
            zulu = options == mike;
            entity = undefined;
            if(zulu) { _fun115055_ip = 52; continue _fun115055 }
 33:
            mike = mike.data;
            zulu = options == mike;
            entity = undefined;
            if(zulu) { _fun115055_ip = 52; continue _fun115055 }
 47:
            entity = mike.length;
 52:
            mike = options != entity;
            oscar = 0;
            report = 0;
            if(!mike) { _fun115055_ip = 66; continue _fun115055 }
 63:
            report = entity;
 66:
            entity = new Array(0);
            offset = oscar < report;
            tango = 0;
            zulu = 0;
            mike = undefined;
            if(!offset) { _fun115055_ip = 191; continue _fun115055 }
 83:
            offset = options == verify;
            yankee = undefined;
            if(offset) { _fun115055_ip = 158; continue _fun115055 }
 92:
            offset = verify.current;
            romeo = options == offset;
            mike = offset;
            yankee = undefined;
            if(romeo) { _fun115055_ip = 158; continue _fun115055 }
 109:
            romeo = offset.recyclerlistview_unsafe;
            offset = options == romeo;
            mike = romeo;
            yankee = undefined;
            if(offset) { _fun115055_ip = 158; continue _fun115055 }
 127:
            offset = romeo.getLayout;
            romeo = offset.bind(romeo)(zulu);
            offset = options == romeo;
            mike = romeo;
            yankee = undefined;
            if(offset) { _fun115055_ip = 158; continue _fun115055 }
 150:
            yankee = romeo.width;
            mike = romeo;
 158:
            romeo = options != yankee;
            offset = 0;
            if(!romeo) { _fun115055_ip = 170; continue _fun115055 }
 167:
            offset = yankee;
 170:
            yankee = entity.push;
            yankee = yankee.bind(entity)(tango);
            tango = tango + offset;
            zulu = zulu + 1;
            if(zulu < report) { _fun115055_ip = 83; continue _fun115055 }
 191:
            return entity;
        }
    };
    zulu['useHappeningNowScrollSnapping'] = mike;
    return entity;
})();
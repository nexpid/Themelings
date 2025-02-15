// app/modules/screen/native/DimensionsStore.android.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: getDimensionsStoreState
        _fun47642: for(var _fun47642_ip = 0; ; ) switch(_fun47642_ip) {
 0:
            entity = argFoo;
            golf = argBar;
            options = {};
            report = _closure1_slot3;
            tango = report.get;
            mike = 'window';
            sizing = tango.bind(report)(mike);
            output = options;
            mike = copyDataProperties(output, sizing);
            report = _closure1_slot1;
            mike = _closure1_slot2;
            offset = 1;
            tango = mike[offset];
            mike = undefined;
            tango = report.bind(mike)(tango);
            oscar = null;
            report = oscar == tango;
            tango = undefined;
            if(report) { _fun47642_ip = 98; continue _fun47642 }
 69:
            verify = _closure1_slot1;
            report = _closure1_slot2;
            report = report[offset];
            verify = verify.bind(mike)(report);
            report = verify.getWindowSize;
            tango = report.bind(verify)();
 98:
            output = options;
            sizing = tango;
            tango = copyDataProperties(output, sizing);
            report = _closure1_slot1;
            tango = _closure1_slot2;
            tango = tango[offset];
            tango = report.bind(mike)(tango);
            tango = oscar == tango;
            verify = undefined;
            if(tango) { _fun47642_ip = 163; continue _fun47642 }
 134:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            tango = tango[offset];
            report = report.bind(mike)(tango);
            tango = report.getScreenSize;
            verify = tango.bind(report)();
 163:
            if(!(oscar == verify)) { _fun47642_ip = 185; continue _fun47642 }
 167:
            report = _closure1_slot3;
            tango = report.get;
            zulu = 'screen';
            verify = tango.bind(report)(zulu);
 185:
            report = options.fontScale;
            tango = verify.width;
            zulu = verify.height;
            tango = tango > zulu;
            offset = oscar == entity;
            zulu = undefined;
            if(offset) { _fun47642_ip = 220; continue _fun47642 }
 214:
            zulu = entity.windowDimensions;
 220:
            kilo = options.width;
            foxtrot = options.height;
            options = verify.width;
            verify = verify.height;
            backup = options;
            yankee = verify;
            if(!(yankee === kilo)) { _fun47642_ip = 256; continue _fun47642 }
 250:
            backup = verify;
            yankee = options;
 256:
            options = global;
            romeo = options.Math;
            offset = romeo.min;
            verify = golf.left;
            kilo = kilo + verify;
            verify = golf.right;
            verify = kilo + verify;
            verify = offset.bind(romeo)(verify, backup);
            offset = options.Math;
            options = offset.min;
            romeo = golf.top;
            foxtrot = foxtrot + romeo;
            romeo = golf.bottom;
            romeo = foxtrot + romeo;
            golf = golf.imeInsetsBottom;
            golf = romeo - golf;
            options = options.bind(offset)(golf, yankee);
            offset = oscar == zulu;
            golf = undefined;
            if(offset) { _fun47642_ip = 352; continue _fun47642 }
 347:
            golf = zulu.width;
 352:
            if(!(golf === verify)) { _fun47642_ip = 365; continue _fun47642 }
 356:
            golf = zulu.height;
            if(!(golf !== options)) { _fun47642_ip = 378; continue _fun47642 }
 365:
            golf = {};
            golf['width'] = verify;
            golf['height'] = options;
            zulu = golf;
 378:
            oscar = oscar == entity;
            mike = undefined;
            if(oscar) { _fun47642_ip = 393; continue _fun47642 }
 387:
            mike = entity.windowDimensions;
 393:
            if(!(mike === zulu)) { _fun47642_ip = 417; continue _fun47642 }
 397:
            mike = entity.fontScale;
            if(!(mike === report)) { _fun47642_ip = 417; continue _fun47642 }
 407:
            mike = entity.screenIsLandscape;
            if(!(mike !== tango)) { _fun47642_ip = 437; continue _fun47642 }
 417:
            mike = {};
            mike['fontScale'] = report;
            mike['screenIsLandscape'] = tango;
            mike['windowDimensions'] = zulu;
            entity = mike;
 437:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    verify = mike.Dimensions;
    var _closure1_slot3 = verify;
    mike = 2;
    mike = oscar[mike];
    offset = report.bind(entity)(mike);
    golf = offset.create;
    mike = function() {
        zulu = _closure1_slot5;
        tango = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 3;
        entity = mike[entity];
        mike = undefined;
        tango = tango.bind(mike)(entity);
        entity = tango.getSafeAreaInsets;
        entity = entity.bind(tango)();
        entity = zulu.bind(mike)(mike, entity);
        return entity;
    };
    mike = golf.bind(offset)(mike);
    var _closure1_slot4 = mike;
    golf = 4;
    golf = oscar[golf];
    options = options.bind(entity)(golf);
    golf = function(argFoo) {
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 5;
        zulu = zulu[mike];
        mike = undefined;
        zulu = tango.bind(mike)(zulu);
        mike = zulu.batchUpdates;
        entity = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = function(argFoo) {
                tango = _closure1_slot5;
                zulu = _closure2_slot0;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    golf = options.bind(entity)(golf);
    options = verify.addEventListener;
    golf = 'change';
    tango = function() {
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.batchUpdates;
        entity = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = function(argFoo) {
                tango = _closure1_slot5;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 3;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = mike.getSafeAreaInsets;
                mike = entity.bind(mike)();
                entity = argFoo;
                entity = tango.bind(zulu)(entity, mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = options.bind(verify)(golf, tango);
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/screen/native/DimensionsStore.android.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
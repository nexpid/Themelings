// app/modules/media_channel/useCanSetThumbnail.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_channel/useCanSetThumbnail.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useCanSetThumbnail
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argBar;
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 1;
            report = report[zulu];
            zulu = undefined;
            oscar = oscar.bind(zulu)(report);
            report = oscar.useStateFromStores;
            golf = _closure1_slot2;
            tango = new Array(1);
            tango[0] = golf;
            entity = function() {
                zulu = _closure1_slot2;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = report.bind(oscar)(tango, entity);
            tango = null;
            report = tango == oscar;
            entity = undefined;
            if(report) { _fun00002_ip = 88; continue _fun00001 }
 78:
            report = oscar.isMediaChannel;
            entity = report.bind(oscar)();
 88:
            if(!entity) { _fun00002_ip = 112; continue _fun00001 }
 91:
            tango = tango == mike;
            zulu = undefined;
            if(tango) { _fun00002_ip = 106; continue _fun00001 }
 100:
            zulu = mike.isImage;
 106:
            mike = true;
            entity = mike === zulu;
 112:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();
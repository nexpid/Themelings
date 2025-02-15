// app/modules/guild_scheduled_events/utils/getGuildEventImage.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
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
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/utils/getGuildEventImage.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: getGuildEventImageURL
        _fun76909: for(var _fun76909_ip = 0; ; ) switch(_fun76909_ip) {
 0:
            tango = argFoo;
            oscar = argBar;
            mike = tango.image;
            entity = null;
            if(!(entity != mike)) { _fun76909_ip = 298; continue _fun76909 }
 21:
            if(!(entity == oscar)) { _fun76909_ip = 83; continue _fun76909 }
 25:
            mike = global;
            mike = mike.window;
            mike = mike.screen;
            zulu = mike.width;
            golf = _closure1_slot0;
            report = _closure1_slot1;
            mike = 1;
            report = report[mike];
            mike = undefined;
            report = golf.bind(mike)(report);
            mike = report.getDevicePixelRatio;
            mike = mike.bind(report)();
            oscar = zulu * mike;
 83:
            golf = _closure1_slot0;
            report = _closure1_slot1;
            mike = 1;
            report = report[mike];
            mike = undefined;
            report = golf.bind(mike)(report);
            mike = report.getBestMediaProxySize;
            report = mike.bind(report)(oscar);
            mike = global;
            oscar = mike.window;
            oscar = oscar.GLOBAL_ENV;
            foxtrot = oscar.CDN_HOST;
            if(!(entity == foxtrot)) { _fun76909_ip = 217; continue _fun76909 }
 143:
            oscar = mike.location;
            golf = oscar.protocol;
            oscar = mike.window;
            oscar = oscar.GLOBAL_ENV;
            oscar = oscar.API_ENDPOINT;
            oscar = golf + oscar;
            offset = _closure1_slot2;
            verify = offset.GUILD_EVENT_IMAGE;
            options = tango.id;
            golf = tango.image;
            zulu = 'png';
            zulu = verify.bind(offset)(options, golf, zulu);
            zulu = oscar + zulu;
            _fun76909_ip = 270; continue _fun76909;
 217:
            sizing = tango.id;
            backup = tango.image;
            tango = mike.HermesInternal;
            offset = tango.concat;
            source = '';
            update = 'https:';
            echo = '//';
            output = '/guild-events/';
            kilo = '/';
            result = foxtrot;
            zulu = source[offset](update, echo, result, output, sizing, kilo, backup, foxtrot);
 270:
            mike = mike.HermesInternal;
            tango = mike.concat;
            mike = '?size=';
            mike = tango.bind(mike)(report);
            mike = zulu + mike;
            return mike;
 298:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();
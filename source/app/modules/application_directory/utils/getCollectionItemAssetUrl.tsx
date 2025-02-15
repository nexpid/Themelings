// app/modules/application_directory/utils/getCollectionItemAssetUrl.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    tango = global;
    verify = tango.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = report.bind(entity)(golf);
    golf = golf.Endpoints;
    var _closure1_slot2 = golf;
    tango = tango.window;
    tango = tango.GLOBAL_ENV;
    golf = tango.API_ENDPOINT;
    var _closure1_slot3 = golf;
    tango = tango.CDN_HOST;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/application_directory/utils/getCollectionItemAssetUrl.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getCollectionItemAssetUrl
        _fun118914: for(var _fun118914_ip = 0; ; ) switch(_fun118914_ip) {
 0:
            entity = argFoo;
            backup = entity.itemId;
            foxtrot = entity.hash;
            options = entity.containerWidth;
            report = undefined;
            if(!(options === report)) { _fun118914_ip = 32; continue _fun118914 }
 26:
            options = 1024;
 32:
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 1;
            mike = oscar[entity];
            golf = tango.bind(report)(mike);
            mike = golf.getBestMediaProxySize;
            entity = oscar[entity];
            verify = tango.bind(report)(entity);
            entity = verify.getDevicePixelRatio;
            entity = entity.bind(verify)();
            entity = options * entity;
            mike = mike.bind(golf)(entity);
            entity = mike.toString;
            golf = entity.bind(mike)();
            mike = global;
            options = mike.URLSearchParams;
            entity = {};
            entity['size'] = golf;
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            record = golf;
            config = entity;
            entity = new record[options](config, sequence);
            golf = entity instanceof Object ? entity : golf;
            entity = golf.toString;
            romeo = entity.bind(golf)();
            entity = 2;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            entity = entity.SUPPORTS_WEBP;
            yankee = 'png';
            if(!entity) { _fun118914_ip = 177; continue _fun118914 }
 171:
            yankee = 'webp';
 177:
            tango = _closure1_slot4;
            entity = null;
            if(!(entity == tango)) { _fun118914_ip = 254; continue _fun118914 }
 187:
            entity = mike.location;
            options = entity.protocol;
            golf = _closure1_slot3;
            tango = _closure1_slot2;
            entity = tango.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE;
            vacuum = entity.bind(tango)(backup, foxtrot, yankee);
            entity = mike.HermesInternal;
            report = entity.concat;
            record = '';
            control = '?';
            config = options;
            sequence = golf;
            source = romeo;
            entity = record[report](config, sequence, vacuum, control, source, update);
            _fun118914_ip = 325; continue _fun118914;
 254:
            tango = mike.location;
            config = tango.protocol;
            vacuum = _closure1_slot4;
            mike = mike.HermesInternal;
            options = mike.concat;
            record = '';
            sequence = '//';
            control = '/app-assets/application-directory/collection-items/';
            update = '/';
            result = '.';
            sizing = '?';
            source = backup;
            echo = foxtrot;
            output = yankee;
            kilo = romeo;
            entity = record[options](config, sequence, vacuum, control, source, update, echo, result, output, sizing, kilo, backup);
 325:
            return entity;
        }
    };
    zulu['getCollectionItemAssetUrl'] = mike;
    return entity;
})();
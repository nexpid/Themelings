// app/modules/messages/native/getEmbeddedActivityKey.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/getEmbeddedActivityKey.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getEmbeddedActivityKey
        entity = argFoo;
        mike = entity.location;
        yankee = mike.id;
        verify = entity.applicationId;
        golf = entity.launchId;
        entity = global;
        entity = entity.HermesInternal;
        zulu = entity.concat;
        romeo = '';
        entity = ':';
        offset = entity;
        options = entity;
        entity = romeo[zulu](yankee, offset, verify, options, golf, oscar);
        return entity;
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: parseEmbeddedActivityKey
        _fun89980: for(var _fun89980_ip = 0; ; ) switch(_fun89980_ip) {
 0:
            zulu = argFoo;
            mike = zulu.split;
            entity = ':';
            tango = mike.bind(zulu)(entity);
            mike = tango.length;
            entity = 3;
            mike = mike < entity;
            entity = null;
            if(mike) { _fun89980_ip = 72; continue _fun89980 }
 34:
            mike = {};
            zulu = 0;
            zulu = tango[zulu];
            mike['channelId'] = zulu;
            zulu = 1;
            zulu = tango[zulu];
            mike['applicationId'] = zulu;
            zulu = 2;
            zulu = tango[zulu];
            mike['instanceId'] = zulu;
            entity = mike;
 72:
            return entity;
        }
    };
    zulu['parseEmbeddedActivityKey'] = mike;
    return entity;
})();
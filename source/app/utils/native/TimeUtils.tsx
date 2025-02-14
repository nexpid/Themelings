// app/utils/native/TimeUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    report = entity.Object;
    tango = report.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(report)(zulu, entity, mike);
    mike = argPlugh;
    entity = 0;
    tango = mike[entity];
    mike = argBar;
    entity = undefined;
    report = mike.bind(entity)(tango);
    tango = report.fileFinishedImporting;
    mike = 'utils/native/TimeUtils.tsx';
    mike = tango.bind(report)(mike);
    mike = function(argFoo, argBar) { // Original name: getTimeFormat
        _fun56907: for(var _fun56907_ip = 0; ; ) switch(_fun56907_ip) {
 0:
            zulu = argBar;
            entity = argFoo;
            entity = entity | 0;
            mike = 60;
            options = entity % mike;
            entity = entity - options;
            report = entity / mike;
            mike = null;
            oscar = mike == zulu;
            tango = undefined;
            entity = undefined;
            if(oscar) { _fun56907_ip = 43; continue _fun56907 }
 37:
            entity = zulu.padMinutes;
 43:
            if(!(mike != entity)) { _fun56907_ip = 50; continue _fun56907 }
 47:
            if(entity) { _fun56907_ip = 123; continue _fun56907 }
 50:
            entity = global;
            mike = entity.String;
            golf = mike.bind(tango)(report);
            mike = entity.String;
            verify = mike.bind(tango)(options);
            oscar = verify.padStart;
            zulu = 2;
            mike = '0';
            oscar = oscar.bind(verify)(zulu, mike);
            entity = entity.HermesInternal;
            zulu = entity.concat;
            mike = '';
            entity = ':';
            entity = zulu.bind(mike)(golf, entity, oscar);
            _fun56907_ip = 206; continue _fun56907;
 123:
            mike = global;
            zulu = mike.String;
            oscar = zulu.bind(tango)(report);
            zulu = oscar.padStart;
            golf = 2;
            report = '0';
            oscar = zulu.bind(oscar)(golf, report);
            zulu = mike.String;
            tango = zulu.bind(tango)(options);
            zulu = tango.padStart;
            report = zulu.bind(tango)(golf, report);
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = '';
            mike = ':';
            entity = tango.bind(zulu)(oscar, mike, report);
 206:
            return entity;
        }
    };
    zulu['getTimeFormat'] = mike;
    return entity;
})();
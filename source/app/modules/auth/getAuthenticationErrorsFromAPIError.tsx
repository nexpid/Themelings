// app/modules/auth/getAuthenticationErrorsFromAPIError.tsx
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
    tango = 'modules/auth/getAuthenticationErrorsFromAPIError.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getAuthenticationErrorsFromAPIError
        _fun108308: for(var _fun108308_ip = 0; ; ) switch(_fun108308_ip) {
 0:
            report = argFoo;
            entity = {};
            mike = report.code;
            entity['error_code'] = mike;
            mike = report.errors;
            zulu = null;
            if(!(zulu == mike)) { _fun108308_ip = 63; continue _fun108308 }
 28:
            mike = report.message;
            entity['message'] = mike;
            mike = report.retryAfter;
            if(!(zulu != mike)) { _fun108308_ip = 61; continue _fun108308 }
 49:
            mike = report.retryAfter;
            entity['retry_after'] = mike;
 61:
            return entity;
 63:
            mike = global;
            tango = mike.Object;
            zulu = tango.keys;
            mike = report.errors;
            tango = zulu.bind(tango)(mike);
            mike = tango.length;
            zulu = 0;
            mike = zulu < mike;
            if(!mike) { _fun108308_ip = 140; continue _fun108308 }
 101:
            oscar = tango[zulu];
            mike = report.getFirstFieldErrorMessage;
            golf = mike.bind(report)(oscar);
            mike = new Array(1);
            mike[0] = golf;
            entity[oscar] = mike;
            zulu = zulu + 1;
            mike = tango.length;
            if(zulu < mike) { _fun108308_ip = 101; continue _fun108308 }
 140:
            return entity;
        }
    };
    zulu['getAuthenticationErrorsFromAPIError'] = tango;
    mike = function(argFoo) { // Original name: getAuthenticationErrorsFromV6OrEarlierAPIError
        _fun108309: for(var _fun108309_ip = 0; ; ) switch(_fun108309_ip) {
 0:
            entity = argFoo;
            mike = global;
            tango = mike.Object;
            zulu = tango.keys;
            mike = entity.fields;
            mike = zulu.bind(tango)(mike);
            zulu = mike.length;
            mike = 0;
            if(!(!(zulu > mike))) { _fun108309_ip = 75; continue _fun108309 }
 38:
            mike = {};
            zulu = entity.message;
            mike['message'] = zulu;
            tango = entity.retryAfter;
            zulu = null;
            if(!(zulu != tango)) { _fun108309_ip = 73; continue _fun108309 }
 61:
            zulu = entity.retryAfter;
            mike['retry_after'] = zulu;
 73:
            return mike;
 75:
            entity = entity.fields;
            return entity;
        }
    };
    zulu['getAuthenticationErrorsFromV6OrEarlierAPIError'] = mike;
    return entity;
})();
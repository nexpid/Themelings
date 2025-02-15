// app/modules/collectibles/utils/ErrorHandlingUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
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
    golf = tango.AbortCodes;
    options = golf.UNAUTHORIZED;
    tango = new Array(3);
    tango[0] = options;
    options = golf.EMAIL_VERIFICATION_REQUIRED;
    tango[1] = options;
    golf = golf.USER_BANNED;
    tango[2] = golf;
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/collectibles/utils/ErrorHandlingUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        _fun77129: for(var _fun77129_ip = 0; ; ) switch(_fun77129_ip) {
 0:
            zulu = argFoo;
            golf = null;
            entity = golf == zulu;
            if(entity) { _fun77129_ip = 265; continue _fun77129 }
 15:
            mike = golf != zulu;
            if(!mike) { _fun77129_ip = 262; continue _fun77129 }
 25:
            tango = 'status';
            tango = tango in zulu;
            if(!tango) { _fun77129_ip = 52; continue _fun77129 }
 36:
            report = zulu.status;
            oscar = 'number';
            report = typeof report;
            tango = oscar === report;
 52:
            if(!tango) { _fun77129_ip = 66; continue _fun77129 }
 55:
            oscar = zulu.status;
            report = 0;
            tango = report === oscar;
 66:
            if(tango) { _fun77129_ip = 259; continue _fun77129 }
 72:
            verify = 'code';
            report = verify in zulu;
            oscar = !report;
            if(!report) { _fun77129_ip = 102; continue _fun77129 }
 86:
            report = zulu.code;
            options = 'number';
            report = typeof report;
            oscar = options !== report;
 102:
            if(oscar) { _fun77129_ip = 130; continue _fun77129 }
 105:
            offset = _closure1_slot2;
            options = offset.includes;
            report = zulu.code;
            report = options.bind(offset)(report);
            oscar = !report;
 130:
            report = !oscar;
            if(!oscar) { _fun77129_ip = 256; continue _fun77129 }
 136:
            oscar = 'body';
            oscar = oscar in zulu;
            if(!oscar) { _fun77129_ip = 156; continue _fun77129 }
 147:
            options = zulu.body;
            oscar = golf != options;
 156:
            if(!oscar) { _fun77129_ip = 175; continue _fun77129 }
 159:
            options = zulu.body;
            offset = 'object';
            options = typeof options;
            oscar = offset === options;
 175:
            if(!oscar) { _fun77129_ip = 187; continue _fun77129 }
 178:
            options = zulu.body;
            oscar = verify in options;
 187:
            if(!oscar) { _fun77129_ip = 220; continue _fun77129 }
 190:
            options = zulu.body;
            verify = golf == options;
            golf = undefined;
            if(verify) { _fun77129_ip = 209; continue _fun77129 }
 204:
            golf = options.code;
 209:
            options = 'number';
            golf = typeof golf;
            oscar = options === golf;
 220:
            if(!oscar) { _fun77129_ip = 250; continue _fun77129 }
 223:
            verify = _closure1_slot2;
            options = verify.includes;
            golf = zulu.body;
            golf = golf.code;
            oscar = options.bind(verify)(golf);
 250:
            oscar = !oscar;
            report = !oscar;
 256:
            tango = report;
 259:
            mike = tango;
 262:
            entity = mike;
 265:
            if(entity) { _fun77129_ip = 304; continue _fun77129 }
 268:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.captureException;
            entity = entity.bind(mike)(zulu);
 304:
            entity = undefined;
            return entity;
        }
    };
    zulu['captureOrIgnoreApiError'] = mike;
    return entity;
})();
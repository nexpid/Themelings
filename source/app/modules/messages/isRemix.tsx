// app/modules/messages/isRemix.tsx
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
    tango = tango.MessageAttachmentFlags;
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/isRemix.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        _fun69390: for(var _fun69390_ip = 0; ; ) switch(_fun69390_ip) {
 0:
            mike = argFoo;
            tango = null;
            zulu = tango == mike;
            if(zulu) { _fun69390_ip = 22; continue _fun69390 }
 12:
            entity = mike.attachments;
            zulu = tango == entity;
 22:
            if(zulu) { _fun69390_ip = 43; continue _fun69390 }
 25:
            entity = mike.attachments;
            tango = entity.length;
            entity = 1;
            zulu = tango < entity;
 43:
            entity = !zulu;
            if(zulu) { _fun69390_ip = 75; continue _fun69390 }
 49:
            tango = mike.attachments;
            zulu = tango.some;
            mike = function(argFoo) {
                _fun69391: for(var _fun69391_ip = 0; ; ) switch(_fun69391_ip) {
 0:
                    zulu = argFoo;
                    mike = zulu.flags;
                    entity = null;
                    entity = entity != mike;
                    if(!entity) { _fun69391_ip = 69; continue _fun69391 }
 17:
                    oscar = _closure1_slot0;
                    report = _closure1_slot1;
                    tango = 1;
                    report = report[tango];
                    tango = undefined;
                    report = oscar.bind(tango)(report);
                    tango = report.hasFlag;
                    zulu = zulu.flags;
                    mike = _closure1_slot2;
                    mike = mike.IS_REMIX;
                    entity = tango.bind(report)(zulu, mike);
 69:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike);
 75:
            return entity;
        }
    };
    zulu['isRemix'] = mike;
    return entity;
})();
// app/modules/threads/MessageCountUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = options;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    entity = 0;
    tango = options[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    report = tango.MAX_THREAD_MESSAGE_COUNT;
    var _closure1_slot3 = report;
    tango = tango.MAX_THREAD_MESSAGE_COUNT_OLD;
    var _closure1_slot4 = tango;
    report = function(argFoo) { // Original name: shouldUseOldMaxMessageCount
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.compare;
        mike = '992549565104128000';
        entity = argFoo;
        mike = zulu.bind(tango)(mike, entity);
        entity = -1;
        entity = mike > entity;
        return entity;
    };
    var _closure1_slot5 = report;
    tango = function(argFoo, argBar) { // Original name: getMessageCountText
        _fun69541: for(var _fun69541_ip = 0; ; ) switch(_fun69541_ip) {
 0:
            report = argFoo;
            tango = argBar;
            zulu = null;
            if(!(zulu != report)) { _fun69541_ip = 100; continue _fun69541 }
 12:
            entity = 0;
            if(!(!(report < entity))) { _fun69541_ip = 100; continue _fun69541 }
 18:
            oscar = _closure1_slot5;
            entity = undefined;
            entity = oscar.bind(entity)(tango);
            if(!(zulu != tango)) { _fun69541_ip = 39; continue _fun69541 }
 36:
            if(!entity) { _fun69541_ip = 56; continue _fun69541 }
 39:
            entity = _closure1_slot4;
            zulu = report >= entity;
            entity = '50+';
            if(zulu) { _fun69541_ip = 98; continue _fun69541 }
 56:
            mike = _closure1_slot3;
            zulu = report >= mike;
            mike = '100k+';
            if(zulu) { _fun69541_ip = 95; continue _fun69541 }
 73:
            zulu = global;
            zulu = zulu.HermesInternal;
            tango = zulu.concat;
            zulu = '';
            mike = tango.bind(zulu)(report);
 95:
            entity = mike;
 98:
            return entity;
 100:
            entity = '0';
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    oscar = function(argFoo, argBar, argBaz) { // Original name: _formatMessageCountLabel
        _fun69542: for(var _fun69542_ip = 0; ; ) switch(_fun69542_ip) {
 0:
            tango = _closure1_slot6;
            oscar = undefined;
            zulu = argFoo;
            entity = argBaz;
            entity = tango.bind(oscar)(zulu, entity);
            zulu = '0';
            if(!(zulu !== entity)) { _fun69542_ip = 78; continue _fun69542 }
 31:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 2;
            zulu = report[zulu];
            zulu = tango.bind(oscar)(zulu);
            report = zulu.intl;
            tango = report.formatToPlainString;
            zulu = {};
            zulu['count'] = entity;
            entity = argBar;
            entity = tango.bind(report)(entity, zulu);
            _fun69542_ip = 133; continue _fun69542;
 78:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 2;
            zulu = golf[mike];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = report.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.eXHkho;
            entity = zulu.bind(tango)(mike);
 133:
            return entity;
        }
    };
    var _closure1_slot7 = oscar;
    oscar = 3;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/threads/MessageCountUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['shouldUseOldMaxMessageCount'] = report;
    zulu['getMessageCountText'] = tango;
    tango = function(argFoo, argBar) {
        report = _closure1_slot7;
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 2;
        entity = zulu[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        entity = entity.t;
        zulu = entity.iTS3XV;
        mike = argFoo;
        entity = argBar;
        entity = report.bind(tango)(mike, zulu, entity);
        return entity;
    };
    zulu['formatMobileMessageCountLabel'] = tango;
    mike = function(argFoo, argBar) {
        report = _closure1_slot7;
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 2;
        entity = zulu[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        entity = entity.t;
        zulu = entity.rfAXDQ;
        mike = argFoo;
        entity = argBar;
        entity = report.bind(tango)(mike, zulu, entity);
        return entity;
    };
    zulu['formatMessageCountLabel'] = mike;
    return entity;
})();